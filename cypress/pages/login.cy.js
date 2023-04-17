class Login{

   enterUsername(){
           return cy.get("input[name='email1']")
   }
   enterPassword(){
    return cy.get("#password1")
   }
   
   loginIntoApplication(username,password){
       cy.get("#email1").type(username)
       cy.get("#password1").type(password)
       cy.get(".submit-btn").click()   


   }

}

export default Login 