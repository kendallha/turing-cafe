import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ id, name, time, number }) => {
  return (
    <article>
      <h1>{name}</h1>
      <h3>{time} pm</h3>
      <h3>Number of guests:{number}</h3>
      <button className='cancel'>Cancel</button>
    </article>
  )

}

export default ReservationCard;