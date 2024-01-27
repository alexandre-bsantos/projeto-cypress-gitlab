// nome: projeto_cypress_gitlab
// acess token: h7x-TbTNp-9b1RAUE75s

const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

Cypress.Commands.add('api_buscaTodosOsProjetos', () => {
    cy.request({
        method: 'GET',
        url: `api/v4/projects/`,
        headers: {
            Authorization: accessToken
        },
    })
})

Cypress.Commands.add('api_deletaTodosOsProjetos', () => {
    cy.api_buscaTodosOsProjetos().then(res => {
        res.body.forEach(project => {
            cy.request({
                method: 'DELETE',
                url: `api/v4/projects/${project.id}`,
                headers: {
                    Authorization: accessToken
                },
            })
        });
    })
})