describe('Smoke Test', () => {

    it('Varify Title', () => {
        cy.visit("https://learn.ineuron.ai")
        cy.title().should("contain","Sign In")
    });



    it('Varify Partial URL', () => {
        cy.visit("https://learn.ineuron.ai")
        cy.url().should("contain","ineuron")  
    });

});