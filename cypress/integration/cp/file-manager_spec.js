import 'cypress-file-upload'

describe('CP/FileManager', () => {
	it('redirects unauthenticated users', () => {
		cy.visit('/admin/files/1')
		  .assertRedirect('/admin/login')
	})

	it('allows admin to view all disks', () => {
		cy.login({ email: 'admin@example.com' })
		  .visit('/admin')

		cy.sidebar('File Manager')
		  .siblings('.nav-menu--nested')
		  .should('not.be.visible')
		
		cy.sidebar('File Manager')
		  .click()

		cy.sidebar('File Manager')
		  .siblings('.nav-menu--nested')
		  .should('be.visible')
	})

	it('allows admin to browse files', () => {
		cy.login({ email: 'admin@example.com' })
		  .visit('/admin/files/1')

		cy.contains('Public')
	})
	
	it('allows admin to upload a file via drag n drop', () => {
		cy.login({ email: 'admin@example.com' })
		  .visit('/admin/files/1')

		const fileName = 'parrot'
		const config = { subjectType: 'drag-n-drop' }

		cy.intercept('POST', '/api/files/1').as('upload')

		cy.get('#dropzone')
		  .attachFile(`${fileName}.png`, config)

		// immediate response
		cy.contains(`${fileName}.png uploaded`)

		// api response
		cy.wait('@upload').then(({ request, response }) => {
			expect(response.statusCode).to.eq(201)
			expect(response.body.data.name).to.eq('parrot')
		})
	})

	it('allows admin to upload a file via HTML5 input', () => {
		cy.login({ email: 'admin@example.com' })
		  .visit('/admin/files/1')

		const fileName = 'penguin'

		cy.intercept('POST', '/api/files/1')
		  .as('upload')
		
		cy.get('input[type="file"]')
		  .attachFile(`${fileName}.png`)
		
		// immediate response
		cy.contains(`${fileName}.png uploaded`)

		// api response
		cy.wait('@upload').then(({ request, response }) => {
			expect(response.statusCode).to.eq(201)
			expect(response.body.data.name).to.eq(fileName)
		})
	})
})