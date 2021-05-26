import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ id, name, time, number }) => {
  return (
    <article>
      <h1>{name}</h1>
      <h3>{time}</h3>
      <h3>{number}</h3>
    </article>
  )

}

export default ReservationCard;