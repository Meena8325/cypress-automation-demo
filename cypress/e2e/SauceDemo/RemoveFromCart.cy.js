
describe("Verify the Remove from Cart functionality", () => {
    it('It should remove a product from the cart and verify the cart', () => {
        cy.visit('https://www.saucedemo.com/') 
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
    })
})