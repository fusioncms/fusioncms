describe('The Admin Login Page', function() {
    it('successfully logs in as an admin', function() {
        cy.visit('/admin/login')
        cy.contains('Welcome to FusionCMS')

        cy.get('input[name=email]').type('admin@example.com')
        cy.get('input[name=password]').type('secret{enter}')
        
        cy.url().should('include', '/admin')
        cy.get('h1').should('contain', 'Dashboard')
    })

    it('prevents incorrect logins from admin', () => {
        cy.visit('/admin/login')
        cy.contains('Welcome to FusionCMS')

        cy.get('input[name=email]').type('not_an_admin@example.com')
        cy.get('input[name=password]').type('asdf{enter}')

        cy.url().should('not.equal', Cypress.config().baseUrl + '/admin')
            .should('equal', Cypress.config().baseUrl + '/admin/login')
    })

    it('logs in programmatically without using the UI', function() {
        cy.login().visit('/admin')

        cy.get('h1').should('contain', 'Dashboard')
    })
})