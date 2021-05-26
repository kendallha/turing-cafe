import React, { Component } from 'react';
import { getReservations } from '../api-calls.js';
import ReservationList from '../ReservationList/ReservationList';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: null
    }
  }

  componentDidMount() {
    getReservations()
      .then(data => this.setState({ reservations: data }))
      .catch(error => console.log(error))
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          {this.state.reservations && 
          <ReservationList reservations={this.state.reservations} />}
        </div>
      </div>
    )
  }
}

export default App;
