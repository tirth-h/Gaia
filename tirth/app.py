from flask import Flask, jsonify, json, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
db = SQLAlchemy(app)
db.init_app(app)
with app.app_context():
    db.create_all()


class SubscriptionModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(240))


    def __str__(self):
        return f'{self.id}, {self.email}'
    
class TableModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(240))
    person = db.Column(db.String(240))
    phone=db.Column(db.Integer)
    day=db.Column(db.String(20))
    time=db.Column(db.String(10))


    def __str__(self):
        return f'{self.id}, {self.name}, {self.person}, {self.phone}, {self.day}, {self.time}'


def subscription_serializer(model):
    return {
        'id': model.id,
        'email': model.email,
    }

def table_serializer(model):
    return {
        'id': model.id,
        'name': model.name,
        'person': model.person,
        'phone':model.phone,
        'day':model.day,
        'time':model.time,
    }


# @app.route('/api', methods=['GET'])
# def index():
#     model = SubscriptionModel.query.all()
#     return jsonify([*map(subscription_serializer, model)])


@app.route('/api/add', methods=['POST'])
def add():
    request_data = json.loads(request.data)
    model = SubscriptionModel(content=request_data['content'])

    db.session.add(model)
    db.session.commit()

    return {'201': 'Details stored successfully!'}

@app.route('/api/book', methods=['POST'])
def book_table():
    request_data = json.loads(request.data)
    model = TableModel(content=request_data['content'])

    db.session.add(model)
    db.session.commit()

    return {'201': 'Table booked successfully!'}



if __name__ == '__main__':
    app.run(debug=True)
