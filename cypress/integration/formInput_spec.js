describe('formInputFunctionality', () => {
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

  it('should change the form input value when data is typed in', () => {
    cy.get('.name-input')
      .type('Kendall')
      .should('have.value', 'Kendall')
    cy.get('.date-input')
      .type('12/21')
      .should('have.value', '12/21')
    cy.get('.time-input')
      .type('7:00')
      .should('have.value', '7:00')
    cy.get('.guests-input')
      .type('2')
      .should('have.value', '2')
  })
})