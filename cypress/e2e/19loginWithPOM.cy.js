
import Login from "../pages/login.cy"
import Newuser from "../pages/registration.cy"


describe('Login Page Object Model', () => {
    it('Login with valid Credentials', () => {
        
        const login = new Login()

        cy.visit("https://ineuron-courses.vercel.app/login")
        /*
        login.enterUsername().type("ineuron@ineuron.ai")
        login.enterPassword().type("ineuron")
        */
        
        login.loginIntoApplication("dummy@gmail.com","dummy")
     
    });

     it('Register a New User', function() {
         
        cy.visit("https://ineuron-courses.vercel.app/login")

        const registration = new Newuser()
         registration.SelectNewUserLink()


     });
});
