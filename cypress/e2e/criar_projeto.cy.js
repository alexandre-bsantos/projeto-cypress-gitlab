describe('Criar projeto', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
        cy.api_deletaTodosOsProjetos();
        cy.login()
    })

    it('Criar um projeto com sucesso', () => {
        cy.get('.blank-state-body').contains('Create a project').click()
        cy.get('#project_name').type('Projeto Cypress')
        cy.get('#project_path').should('have.value', 'projeto-cypress').and('have.attr', 'required')
        cy.get('#project_description').type('Descrição de criação de projetos para os testes em cypress')

        cy.get('.project-submit').first().click()
        cy.get('.qa-project-name').contains('Projeto Cypress')
    });

    it('Criar um projeto com erro', () => {
        cy.get('.blank-state-body').contains('Create a project').click()
        cy.get('.project-submit').first().click()

        cy.get('.prepend-top-0').contains('New project')
    });

})