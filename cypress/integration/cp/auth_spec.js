describe('CP/Auth', () => {
	beforeEach(() => {
		cy.visit('/admin/login')
	})

	//
	// Unauthorized
	// 

	it('should redirect unauthenticated users to admin login', () => {
		cy
			.visit('/admin')
			.assertRedirect('/admin/login')
	})

	//
	// Validation
	// 

	it('should fail on invalid empty fields', () => {

		// login form
		cy.get('#login-form').within(($form) => {
			cy.contains('button', 'Login').click()
		})

		// assertions
		cy.contains('#email-field_message > .help', 'The email field is required.')
		cy.contains('#password-field_message > .help', 'The password field is required.')
	})

	it('should fail on invalid email attempt', () => {

		// login form
		cy.get('#login-form').within(($form) => {
			cy.get('#email-field').type('invalid-email')
			cy.get('#password-field').type('secret')
			cy.contains('button', 'Login').click()
		})

		// assertion
		cy.contains('#email-field_message > .help', 'These credentials do not match our records.')
	})

	it('should fail on invalid password attempt', () => {

		// login form
		cy.get('#login-form').within(($form) => {
			cy.get('#email-field').type('admin@example.com')
			cy.get('#password-field').type('invalid-password')
			cy.contains('button', 'Login').click()
		})

		// assertion
		cy.contains('#email-field_message > .help', 'These credentials do not match our records.')
	})

	//
	// Success
	// 
	it('should send a valid login to the control panel dashboard', () => {

		// login form
		cy.get('#login-form').within(($form) => {
			cy.get('#email-field').type('admin@example.com')
			cy.get('#password-field').type('secret')
			cy.contains('button', 'Login').click()
		})

		// assertion
		cy.assertRedirect('/admin')
	})
})