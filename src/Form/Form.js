import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
    }
  }

  render() {
    return (
      <form>
      <input type='text' placeholder='Name' name='name' value={this.state.name}></input>
      <input type='text' placeholder='Date (mm/dd)' name='date' value={this.state.date}></input>
      <input type='text' placeholder='Time' name='time' value={this.state.time}></input>
      <input type='text' placeholder='Number of guests' name='number' value={this.state.number}></input>
      <button type='submit'>Make Reservation</button>
      </form>
    )
  }
}

export default Form;