import React from 'react'
import { useState } from 'react'

import './bookAtable.css'

const BookAtable = () => {
  const [name, setName] = useState("");
  const [person, setPerson] = useState("");
  const [phone, setPhone] = useState();
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const handler = () => {
    console.log(`name: ${name},\n person: ${person},\n phone: ${phone},\n day: ${day},\n time: ${time}`)
    setDay("")
    setName("")
    setPhone("")
    setTime("")
    setPerson("")
  }
  return (
    <div className='app__book'>
      <section class="banner">
      <h2 class="head">BOOK YOUR TABLE NOW</h2>
<div class="card-container">

</div>
<div class="card-content">
  <h3>Reservation</h3>
  <form>
  <div class="form-row">
      <select name="days" onChange={(e)=> {setDay(e.target.value)}}>
        <option value="day-select"  selected disabled>Select Day</option>
        <option value="sunday">Sunday</option>
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="saturday">Saturday</option>
      </select>

      <select name="hours" onChange={(e)=> {setTime(e.target.value)}}>
        <option value="hour-select">Select Hour</option>
        <option value="10">10: 00</option>
        <option value="10">12: 00</option>
        <option value="10">14: 00</option>
        <option value="10">16: 00</option>
        <option value="10">18: 00</option>
        <option value="10">20: 00</option>
        <option value="10">22: 00</option>
      </select>
    </div>
    <div class="form-row">
      <input type="text" placeholder="Full Name" value={name} onChange={(e)=> {setName(e.target.value)}}/>
      <input type="text" placeholder="Phone Number" value={phone} onChange={(e)=> {setPhone(e.target.value)}}/>
    </div>

    <div class="form-row">
      <input type="number" placeholder="How Many Persons?" value={person} onChange={(e)=> {setPerson(e.target.value)}} min="1" />
      <input onClick={handler} className='custom__button' type="button" value="BOOK TABLE" />
    </div>

  </form>
  </div>
      </section>
    </div>
  )
}

export default BookAtable;