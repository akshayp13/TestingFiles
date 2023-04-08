describe('Click handle', () => {
    
    it('Right click handle', () => {
         
      cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
      cy.contains("right click me").rightclick()
      cy.xpath("//span[text()='Copy']").click()
      
      cy.on("window:alert",function(msg){

        expect(msg).to.be.equal("clicked: copy")
      })


    });
});