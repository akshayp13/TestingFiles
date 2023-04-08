/// <reference types="Cypress" />   // To access cypress commands (from site)

describe('Smoke Test', () => {

    it('Varify Title', () => {
        cy.visit("https://learn.ineuron.ai")
        cy.title().should("contain","Sign In")
    });

    it('Varify Exact Title', () => {
        cy.visit("https://learn.ineuron.ai")
        cy.title().should("eq","Sign In | iNeuron.ai")  // Exact page Title
    });

    it('Varify Partial URL', () => {
        cy.visit("https://learn.ineuron.ai")
        cy.url().should("contain","ineuron")  // Partial URL
    });

});