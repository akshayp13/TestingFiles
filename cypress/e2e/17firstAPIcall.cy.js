describe('First API call', () => {

    it('Get request via cypress', () => {

        cy.request("https://ineuron-courses.vercel.app/login").then(function(response){

           cy.log(response.status)
           cy.log(response.duration)
           cy.log(response.body)
           cy.log(response.statusText)

        })

        
    });
});