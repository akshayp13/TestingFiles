describe( ' frame Handling', () => {
    it('Double Click with Frame', () => {

        cy.visit("https://api.jquery.com/dblclick/")
        cy.frameLoaded("iframe")

        cy.iframe().contains("Double click the block").siblings().eq(0).dblclick()
          .should("have.class","dbl")// it is to confirm action after doubleclick
        // sibling will locate that near frame element and with eq can get exact one



    });
});