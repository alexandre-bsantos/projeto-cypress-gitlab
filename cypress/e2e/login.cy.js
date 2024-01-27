describe ('Login', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
    })

    it('Login feito com sucesso', () => {
        cy.get("[data-qa-selector='login_field']").type(Cypress.env('user_name'))
        cy.get("[data-qa-selector='password_field']").type(Cypress.env('user_password'))
        cy.get("[data-qa-selector='sign_in_button']").click()

        cy.get("[data-qa-selector='welcome_title_content']").contains('Welcome to GitLab')
    });

    it('Login com usuário incorreto', () => {
        cy.get("[data-qa-selector='login_field']").type('usuarioErro')
        cy.get("[data-qa-selector='password_field']").type(Cypress.env('user_password'))
        cy.get("[data-qa-selector='sign_in_button']").click()

        cy.get(".container .flash-container .flash-alert").contains('Invalid Login or password')
    });

    it('Login com senha incorreta', () => {
        cy.get("[data-qa-selector='login_field']").type(Cypress.env('user_name'))
        cy.get("[data-qa-selector='password_field']").type('senhaErro')
        cy.get("[data-qa-selector='sign_in_button']").click()

        cy.get(".container .flash-container .flash-alert").contains('Invalid Login or password')
    });

})