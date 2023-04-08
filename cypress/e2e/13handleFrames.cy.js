describe('Handle Frames', () => {
    it('Handle frame without plugin', () => {
        
      cy.visit("https://the-internet.herokuapp.com/iframe")

      cy.get("iframe")
        .its("0.contentDocument")
        .its("body")
        .then(cy.wrap)
        .clear()
        .type("Cypress")

    });

    it.only('Handle frame with command', () => {
        
      cy.visit("https://the-internet.herokuapp.com/iframe")

       cy.SwitchToIframe("iframe")
        .clear()
        .type("Cypress")

    });

    it('Handle frame with plugin', () => {
        
      cy.visit("https://the-internet.herokuapp.com/iframe")

      cy.frameLoaded()
        .iframe()
        .clear()
        .type("Cypress")

    });
});

// in interview if they asked we dont have plugin then explain first method
