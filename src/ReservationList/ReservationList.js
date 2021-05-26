import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationList = ({ reservations }) => {
  const resList = reservations.map(reservation => {
    return (
      <ReservationCard
      id={reservation.id}
      name={reservation.name}
      time={reservation.time}
      number={reservation.number}
      />
    )
  })
  return (
    <section>{resList}</section>
  )
}

export default ReservationList;