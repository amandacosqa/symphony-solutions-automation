Cypress.Commands.add('goToSwagLabs', () => {
    cy.visit("https://www.saucedemo.com/")
})

Cypress.Commands.add('login', (username, password) => {
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})
