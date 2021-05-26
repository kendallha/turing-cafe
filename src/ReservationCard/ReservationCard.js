import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ id, name, date, time, number }) => {
  return (
    <article id='id' className='res-card'>
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className='cancel'>Cancel</button>
    </article>
  )

}

export default ReservationCard;