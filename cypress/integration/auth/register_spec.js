describe('Auth/Registraton', () => {
	it('registers new user', () => {
		cy.visit('/register')

		const name = cy.faker.name.findName()
		const email = cy.faker.internet.email()
		const password = cy.faker.internet.password()

		cy.get('form').within(($form) => {
			cy.get('input#name').type(name)
			cy.get('input#email').type(email)
			cy.get('input#password').type(password)
			cy.get('input#password_confirmation').type(password)
			
			cy.contains('button', 'Register').click()
		})

	})
})