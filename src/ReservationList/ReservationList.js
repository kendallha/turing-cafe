import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationList = ({ reservations }) => {
  console.log(reservations)
  const resList = reservations.map(reservation => {
    return (
      <ReservationCard
      id={reservation.id}
      name={reservation.name}
      time={reservation.time}
      number={reservation.number}
      key={reservation.id}
      />
    )
  })
  return (
    <section>{resList}</section>
  )
}

export default ReservationList;