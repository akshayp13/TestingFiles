describe('Handle google search', () => {
    it('Select value from google search', () => {
        
        cy.visit("https://www.google.com/")

        cy.get("input[name='q']").type("Mukesh Otwani",{delay:100})// to get autosuggestion

       cy.SelectValueFromList()

       // here its working as custom command, its running code saved as custom command
       
    });

    it('login test', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login")

       cy.login("ineuron@ineuron.ai","ineuron")

         // here we can pass values here directly     
    });
});