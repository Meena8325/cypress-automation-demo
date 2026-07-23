describe("Verify the Cart functionality shopping cart link clicable", () => {
    it('It should verify the cart functionality', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')
        cy.get('.cart_item').should('have.length', 1)
    })
})

