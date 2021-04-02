//
// User Tests
//

// --
describe('CP/Users - Authentication', () => {
	it('should redirect unauthenticated users to admin login', () => {
		cy.visit('/admin/users')
		  .assertRedirect('/admin/login')
	})
})

// --
describe('CP/Users - Authorization', () => {
	it('should forbid unauthorized from the overview page', () => {
		cy.login({ email: 'admin-user@example.com' })
		  .request({
		  	url: '/admin/users',
		  	failOnStatusCode: false
		  })
		  .its('status')
		  .should('equal', 403)
	})

	it('should forbid unauthorized from the overview page', () => {
		cy.login({ email: 'admin-user@example.com' })
		  .request({
		  	url: '/admin/users/create',
		  	failOnStatusCode: false
		  })
		  .its('status')
		  .should('equal', 403)
	})

	it('does not allow admins to manage higher level users', () => {
		cy
			.login({ email: 'admin-user@example.com' })
			.visit('/admin/users')

		cy.tableRowFor('admin@example.com').actionExists('View')
		cy.tableRowFor('admin@example.com').actionMissing('Edit')
		cy.tableRowFor('admin@example.com').actionMissing('Resend Verification')
		cy.tableRowFor('admin@example.com').actionMissing('Reset Password')
		cy.tableRowFor('admin@example.com').actionMissing('Delete')
	})
})

// --
describe('CP/Users - Overview', () => {
	beforeEach(() => {
		cy.login({ email: 'admin@example.com' })
		  .visit('/admin/users')
	})

	it('should restrict owner from being deleted', () => {
		cy.tableRowFor('admin@example.com')
		  .contains('input[type="checkbox"]')
		  .should('not.exist')

		cy.tableRowFor('admin@example.com')
		  .actionMissing('Delete')
	})

	it('allows owner to view all users', () => {
		cy.contains('Users - all')
	})

	it('allows owner to manage users', () => {
		cy.tableRowFor('admin-user@example.com').actionExists('View')
		cy.tableRowFor('admin-user@example.com').actionExists('Edit')
		cy.tableRowFor('admin-user@example.com').actionExists('Resend Verification')
		cy.tableRowFor('admin-user@example.com').actionExists('Reset Password')
		cy.tableRowFor('admin-user@example.com').actionExists('Delete')
	})

	it('requires confirmation before deleting a user', () => {
		cy.tableRowFor('admin-user@example.com').actionsExpand()
		
		cy.contains('a', 'Delete').click()

		// assertion
		cy.get('#delete-user').should('be.visible')
	})

	it('does not allow a user to delete themselves', () => {
		cy.tableRowFor('admin@example.com').actionMissing('Delete')
	})
})

describe('CP/Users - Add', () => {
	beforeEach(() => {
		cy.login({ email: 'admin@example.com' })
		  .visit('/admin/users/create')
	})

	it('disables the save button on page load', () => {
		cy.get('.main-content__header')
		  .contains('button', 'Save')
		  .should('be.disabled')
	})

	it('allows navigation back to overview page', () => {
		cy.get('.main-content__header')
		  .contains('a', 'Go Back')
		  .click()

		 cy.assertRedirect('/admin/users')
	})

	it('requires a name, handle, and role', () => {
		cy.get('input[name="status"]')
		  .click()
		
		cy.get('.main-content__header')
		  .contains('button', 'Save')
		  .click()

		 // assertions
		 cy.contains('.help', 'The name field is required.')
		 cy.contains('.help', 'The email field is required.')
	})

	it('requires a name and handle', () => {
		cy.get('input[name="name"]').type('Another User')
		cy.get('input[name="email"]').type('another@example.com')

		cy.get('.main-content__header')
		  .contains('button', 'Save')
		  .click()

		// assertions
		cy.assertRedirect('/admin/users')
		cy.contains('another@example.com')
	})
})

describe('CP/Users - Edit', () => {
	beforeEach(() => {
		cy.createUser({
			name: 'Temp User',
			email: 'temp-user@example.com',
			password: 'secret',
		}, 'user').then((user) => {
			cy.log(user)
			cy.login({ email: 'admin@example.com' })
			  .visit(`/admin/users/${user.id}/edit`)
		})
	})

	it('disables the save button on page load', () => {
		cy.get('.main-content__header')
		  .contains('button', 'Save')
		  .should('be.disabled')
	})
})