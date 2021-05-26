import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';
import './ReservationList.css';

const ReservationList = ({ reservations }) => {
  const resList = reservations.map(reservation => {
    return (
      <ReservationCard
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      key={reservation.id}
      />
    )
  })
  return (
    <section className='res-list'>{resList}</section>
  )
}

export default ReservationList;