Cypress.Commands.add('login', () => {
    cy.get("[data-qa-selector='login_field']").type(Cypress.env('user_name'))
    cy.get("[data-qa-selector='password_field']").type(Cypress.env('user_password'))
    cy.get("[data-qa-selector='sign_in_button']").click()
})
