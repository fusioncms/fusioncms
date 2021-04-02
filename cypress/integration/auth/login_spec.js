describe('Auth/Login', () => {

	before(() => {
		cy.createUser({
			name: 'Jane Doe',
			email: 'user@example.com',
			password: 'secret',
		}, 'user')
	})


	beforeEach(() => {
		cy.logout()
	})


	// ------------
	// Login Tests

	it('valid email is required', () => {
		cy.visit('/login')
		
		cy.get('#email').type('invalid-email')
		cy.get('#password').type('secret')
		cy.contains('button', 'Login').click()
		
		cy.contains('.text-red-500', 'These credentials do not match our records.')
	})

	it('user can log in successfully', () => {
		cy.visit('/login')

		cy.get('#email').type('user@example.com')
		cy.get('#password').type('secret')
		cy.contains('button', 'Login').click()
		
		cy.url().should('not.contain', '/login')
	})

	// ------------
	// Logout Tests

	it('logged in users can logout', () => {
		cy.login({ email: 'user@example.com' })
		
		cy.visit('/')
		cy.contains('Logout')

		cy.visit('/logout')
		cy.contains('Login')
	})
})