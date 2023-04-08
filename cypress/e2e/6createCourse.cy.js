describe('Create-Delete Course', () => {

    it('Create course', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("input[name='email1']").type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")
        cy.get('#password1').type("ineuron").should("have.value","ineuron")
        cy.get('.submit-btn').should("be.enabled").click()

        cy.contains("Manage").realHover()  // to put on mouse to see all dropdown list
        //for this we have installed plugin realhover
        cy.wait(3000)
        cy.contains("Manage Courses").click() // contains is to locate element with text      
        cy.xpath("//table[contains(@class,'courses')]//tbody//tr").should("have.length","4")
        // this is to get total no of courses available
        cy.contains("Add New Course").click({force:true}) // this is to focefully applying action
        cy.get("#thumbnail").attachFile(sideways.jpeg)
         // in css # is used to locate id and . is used for class
         // here we need to add file first in fixtures
         

    });
});