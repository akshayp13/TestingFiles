describe('registration form', () => {

    it('create a new user', () => {
     
      cy.visit("https://ineuron-courses.vercel.app/login")
      //cy.viewport("1920,1080")  // to change dimensions

      cy.contains("New user? Signup").click()  //to get user from text
      cy.contains("Sign Up").should("be.disabled")
      cy.get("input[name='name']").type("kapil")
      cy.get("input[name='email']").type("kapil1234@gmail.com")
      cy.get("input[name='password']").type("kapil1234")
      //cy.get("input[type='checkbox']").click({multiple:true})..to select all checkboxes
      //cy.get("input[name='password']").first().click()
      //cy.get("input[name='password']").last().click()
      //cy.get("input[name='password']").eq(2).click()
      cy.xpath("//label[text()='Testing']/preceding::input[1]").click()
      cy.get("input[type='radio']").first().click()
      
      //cy.get("select[name='state']").select(3)
      cy.get("select[name='state']").select("Goa")
      cy.contains("Sign Up").should("be.enabled").click()
      
      cy.get("input[name='email1']").type("kapil1234@gmail.com").should("have.value","kapil1234@gmail.com")
        //this is to check if same is typing or not

        //cy.xpath("//input[@name='email1']").type("ineuron@ineuron.ai")

        cy.get('#password1').type("kapil1234").should("have.value","kapil1234")

        cy.get('.submit-btn').should("be.enabled").click()

          // add assertion here,check if welcome text is visible(HomeWork)
        cy.get('.navbar-menu-links > button').click()
        cy.get('.header').should("be.visible")
              
    });
});
