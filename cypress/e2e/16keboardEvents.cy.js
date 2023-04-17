describe('Keyboard event', () => {
    
    it('Keyboard handling', () => {
         
      cy.visit("https://ineuron-courses.vercel.app/login")
 
      cy.get("a").debug() // it will show hyperlinks present there on page
      // for debug to perform you have to open consoletab at testing

      cy.get("input[name='email1']").type("ineuron@ineuron.ai")

      cy.pause()

      cy.get('#password1').type("ineuron{enter}")  // enter click from keyboard
      

    });
});

