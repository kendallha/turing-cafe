import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ deleteReservation, id, name, date, time, number }) => {
  return (
    <article className='res-card'>
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className='cancel' onClick={() => deleteReservation(id)}>Cancel</button>
    </article>
  )

}

export default ReservationCard;