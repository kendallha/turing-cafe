import React, { Component } from 'react';
import { getReservations, postReservation } from '../api-calls.js';
import ReservationList from '../ReservationList/ReservationList';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: null,
      error: null
    }
  }

  componentDidMount() {
    getReservations()
      .then(data => this.setState({ reservations: data }))
      .catch(error => this.setState({ error: 'Something went wrong, please try again.' }))
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] });
    postReservation(newReservation)
      .then(data => this.setState({ reservations: this.state.reservations }))
      .catch(error => this.setState({ error: 'Something went wrong, please try again.' }))
  }

  deleteReservation = (id) => {
    const filteredReservations = this.state.reservations.filter(reservation => reservation.id !== id);
    this.setState({ reservations: filteredReservations })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {this.state.error && <h2>{this.state.error}</h2>}
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          {!this.state.reservations && <h1>There are no reservations currently.</h1>}
          {this.state.reservations && 
          <ReservationList deleteReservation={this.deleteReservation} reservations={this.state.reservations} />}
        </div>
      </div>
    )
  }
}

export default App;
