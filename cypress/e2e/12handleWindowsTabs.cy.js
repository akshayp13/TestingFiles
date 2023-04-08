describe('Handle Window Tabs', () => {
    it('Switch tab in cypress', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("input[name='email1']").type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")
        cy.get('#password1').type("ineuron").should("have.value","ineuron")
        cy.get('.submit-btn').should("be.enabled").click()
        cy.contains("Manage").realHover()  // to put on mouse to see all dropdown list
        //for this we have installed plugin realhover
        cy.wait(3000)
        cy.contains("Manage Categories").invoke("removeAttr","target").click({force:true})
        // here we removed attribute target to open object on same page i.e "_blank"
        // now categories are showing on same page not opening in new tab

        cy.window().then(function(win){

            cy.contains("Add New Category").click({force:true}) // if needed then add it
            cy.stub(win,"prompt").returns("Playwright")
            
        })
        cy.contains("Playwright").should("be.visible")
    });
});