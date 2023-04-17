describe('Keyboard event', () => {
    
    it('Keyboard handling', () => {
         
      cy.visit("https://ineuron-courses.vercel.app/login")
 
      cy.get("a").debug() 
     
      cy.get("input[name='email1']").type("ineuron@ineuron.ai")

      cy.pause()

      cy.get('#password1').type("ineuron{enter}")  
      

    });
});
