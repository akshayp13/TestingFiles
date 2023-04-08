describe('Handle google search', () => {
    it('Select value from google search', () => {
        
        cy.visit("https://www.google.com/")

        cy.get("input[name='q']").type("Mukesh Otwani",{delay:100})// to get autosuggestion

        cy.xpath("//div[@role='option']/div[1]//span")
        .each(function(ele,num1,list1){  // to iterate through element , index,list

             cy.log(ele.text())

            if(ele.text().includes("cypress"))
            {
                cy.wrap(ele).click({force:true})
            }
        })
    });
});