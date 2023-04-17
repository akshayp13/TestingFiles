describe('Handle Window Tabs', () => {
    it('Switch tab in cypress', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("input[name='email1']").type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")
        cy.get('#password1').type("ineuron").should("have.value","ineuron")
        cy.get('.submit-btn').should("be.enabled").click()
        cy.contains("Manage").realHover()  
      
        cy.wait(3000)
        cy.contains("Manage Categories").invoke("removeAttr","target").click({force:true})
     

        cy.window().then(function(win){

            cy.contains("Add New Category").click({force:true}) 
            cy.stub(win,"prompt").returns("Playwright")
            
        })
        cy.contains("Playwright").should("be.visible")
    });
});