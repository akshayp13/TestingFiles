describe('Handle JS Alerts', () => {
    it('Normal Alerts', function()  {

      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      cy.contains("Click for JS Alert").click()
      // cypress do not show pop uo in UI
        // it was simply to click on ok on an alert
      // to varify if exact message came after clicking , we use "on"

      cy.on("window:alert",function(msg){  // here we neeed alert so selected it
           expect(msg).to.be.equal("I am a JS Alert")
      })

    });

    it('Confirm Alerts', function()  {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click()
          // here need to either select yes or cancel i.e is confirm
        // to varify if exact message came after clicking , we use "on"
  
        cy.on("window:confirm",function(msg){  // here we neeed confirm
             expect(msg).to.be.equal("I am a JS Confirm")
             // here if you dont select either confirm or cancel it will choose confirm automatically

             return false  // to choose cancel option
        })
        // to confirm if we clicked on cancel
        cy.contains("You clicked: Cancel").should("be.visible")

      });

      it.only('Prompt Alerts', function()  {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       
       // here we need to givve input and type
       // we dont have window:prompt option here
       // we use stubbing for browser behaviour change
  
       cy.window().then(function(win){  // here we tabbed complete window object and then went to prompt
        cy.contains("Click for JS Prompt").click()
           cy.stub(win,"prompt").returns("Cypress")  // cypress will come in output after typing
       })

       cy.contains("You entered: Cypress").should("be.visible")
      });
});