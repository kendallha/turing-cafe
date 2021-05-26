describe('mainReservationPage', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/reservations', [{
      "id": 1,
      "name": "Christie Test",
      "date": "12/29",
      "time": "7:00",
      "number": 12
      },
      {
      "id": 2,
      "name": "Leta Test",
      "date": "4/5",
      "time": "7:00",
      "number": 2
      },
      {
      "id": 3,
      "name": "Pam Test",
      "date": "1/21",
      "time": "6:00",
      "number": 4
      }])
    cy.visit('http://localhost:3000/')
  })

  it('should have a header on the page', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })

  it('should have a form to book a reservation', () => {
    cy.get('form').find('input')
    cy.get('form')
      .find('button')
      .contains('Make Reservation')
  })

  it('should show a list of all reservations', () => {
    cy.get('.res-list').children().should('have.length', 3)
    cy.get('.res-list').find('.res-card')
  })

  it('should have reservation cards that display the name, date, time, and number of people', () => {
    cy.get('.res-card').contains('Christie')
    cy.get('.res-card').contains('12/29')
    cy.get('.res-card').contains('7:00 pm')
    cy.get('.res-card').contains('Number of guests: 12')
  })
})