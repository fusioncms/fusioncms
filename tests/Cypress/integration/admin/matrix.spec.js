describe('The Matrix', function () {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('laravel_session', 'XSRF-TOKEN')
    })

    it('creates a new matrix page', function () {
        cy.login()
        
        cy.visit('/admin/matrices/create')
        cy.get('h1').should('contain', 'Create Matrix')

        // cy.get('.card__body > .row > .col > .form__group > #name').click()
        // cy.get('.card__body > .row > .col > .form__group > #name').type('Test')
        // cy.get('.row:nth-child(1) > .form__group > .form__select > .form__select-button').click()
        // cy.get('.form__group > .form__select--open > .form__select-dropdown > .form__select-options > .form__select-option:nth-child(2)').click()
        // cy.get('.page-content > .flex > .actions > .vue-portal-target > .button--primary').click()

        // cy.visit('/admin/pages/test')
        // cy.get('h1').should('contain', 'Test')
    })
})