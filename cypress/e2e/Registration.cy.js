describe('registration form', () => {

    it('create a new user', () => {
     
      cy.visit("https://ineuron-courses.vercel.app/login")
      
      cy.contains("New user? Signup").click() 
      cy.contains("Sign Up").should("be.disabled")
      cy.get("input[name='name']").type("kapil")
      cy.get("input[name='email']").type("kapil1234@gmail.com")
      cy.get("input[name='password']").type("kapil1234")
 
      cy.xpath("//label[text()='Testing']/preceding::input[1]").click()
      cy.get("input[type='radio']").first().click()
      
     
      cy.get("select[name='state']").select("Goa")
      cy.contains("Sign Up").should("be.enabled").click()
      
      cy.get("input[name='email1']").type("kapil1234@gmail.com").should("have.value","kapil1234@gmail.com")
       
        cy.get('#password1').type("kapil1234").should("have.value","kapil1234")

        cy.get('.submit-btn').should("be.enabled").click()

     
        cy.get('.navbar-menu-links > button').click()
        cy.get('.header').should("be.visible")
              
    });
});
