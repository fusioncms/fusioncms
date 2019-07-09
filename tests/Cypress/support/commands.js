Cypress.Commands.add('login', (email = null, password = null) => {
    email = email || Cypress.env('email')
    password = password || Cypress.env('password')

    cy.visit('/admin/login')
        .getCookie('XSRF-TOKEN')
        .then((cookie) => {
            cy.request({
                method: 'POST',
                url: '/admin/login',
                form: true,
                body: {email, password},
                headers: {
                    'X-XSRF-TOKEN': decodeURIComponent(cookie.value)
                }
            })
        })
})