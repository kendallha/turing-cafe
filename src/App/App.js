import React, { Component } from 'react';
import { getReservations } from '../api-calls.js';
import ReservationList from '../ReservationList/ReservationList';
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.reservations && 
          <ReservationList reservations={this.reservations} />}
        </div>
      </div>
    )
  }
}

export default App;
