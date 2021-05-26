describe('addFormUserFlow', () => {
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
    cy.get('.name-input')
      .type('Kendall')
    cy.get('.date-input')
      .type('12/21')
    cy.get('.time-input')
      .type('7:00')
    cy.get('.guests-input')
      .type('2')
    cy.get('.reservation-button').click()
  })

  it('should add a reservation card when a user types into the inputs and submits the form', () => {
    cy.get('.res-list').children().should('have.length', 4)
    cy.get('.res-list').find('.res-card')
  })

  it('should show the reservation details the user typed into the inputs in the new reservation card', () => {
    cy.get('.res-card').contains('Kendall')
    cy.get('.res-card').contains('12/21')
    cy.get('.res-card').contains('7:00 pm')
    cy.get('.res-card').contains('Number of guests: 2')
  })

  it('should clear the form inputs after the reservation is submitted', () => {
    cy.get('.name-input')
    .should('have.value', '')
  cy.get('.date-input')
    .should('have.value', '')
  cy.get('.time-input')
    .should('have.value', '')
  cy.get('.guests-input')
    .should('have.value', '')
  })
})