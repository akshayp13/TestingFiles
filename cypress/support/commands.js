// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*Cypress.commands.add("SelectValueFromList",function (){
    
    cy.xpath("//div[@role='option']/div[1]//span")
    .each(function(ele){  // to iterate through element 

         cy.log(ele.text())

        if(ele.text().includes("cypress"))
        {
            cy.wrap(ele).click({force:true})
        }
})
})

cypress.commands.add("login",function(username,pass){

    cy.get("input[name='email1']").type(username)
    cy.get('#password1').type(password)
    cy.get('.submit-btn').should("be.enabled").click()

})
*/

Cypress.Commands.add("SwitchToIframe",function(frameIdorNameorLocator){
  return cy.get(frameIdorNameorLocator)
   .its("0.contentDocument")
   .its("body")
   .then(cy.wrap)

})