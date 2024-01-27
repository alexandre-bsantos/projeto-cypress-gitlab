describe('Criar grupo', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
        cy.login()
    })

    it('Criar um grupo com sucesso', () => {
        cy.get('.blank-state-body').contains('Create a group').click()
        cy.get('#group_name').type('Grupo Cypress')
        cy.get('#group_path').should('have.value', 'grupo-cypress').and('have.attr', 'required')
        cy.get('#group_description').type('Descrição de criação de grupo para os testes em cypress')

        cy.get('.btn-success').first().click()
        cy.get('.home-panel-title').contains('Grupo Cypress')
    });

    it('Criar um projeto com erro', () => {
        cy.get('.blank-state-body').contains('Create a group').click()
        cy.get('.btn-success').first().click()
        cy.contains('Please fill in a descriptive name for your group.')
        cy.contains('Please choose a group URL with no special characters.')

        cy.get('.page-title').contains('New group')
    });

})