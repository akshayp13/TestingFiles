describe('Create-Delete Course', () => {

    it('Create course', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("input[name='email1']").type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")
        cy.get('#password1').type("ineuron").should("have.value","ineuron")
        cy.get('.submit-btn').should("be.enabled").click()

        cy.contains("Manage").realHover()  
      
        cy.wait(3000)
        cy.contains("Manage Courses").click()  
        cy.xpath("//table[contains(@class,'courses')]//tbody//tr").should("have.length","4")
     
        cy.contains("Add New Course").click({force:true}) 
        cy.get("#thumbnail").attachFile(sideways.jpeg)
         
         

    });
});