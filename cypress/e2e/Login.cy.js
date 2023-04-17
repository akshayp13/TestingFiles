describe('Login with Cyress', () => {

    it('Login with valid credentials', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login")

        cy.get("input[name='email1']").type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")
       
        cy.get('#password1').type("ineuron").should("have.value","ineuron")

        cy.get('.submit-btn').should("be.enabled").click()

         
        cy.get('.navbar-menu-links > button').click()
        cy.get('.header').should("be.visible")
        
    });

});
