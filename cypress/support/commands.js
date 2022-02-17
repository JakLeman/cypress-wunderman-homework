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

Cypress.Commands.add("point", (arrayElement) => {
  switch (arrayElement) {
    case "Apps":
      cy.get("div.select > label[aria-label='Apps']");
      break;
    case "B2B":
      cy.get("div.select > label[aria-label='B2B']");
      break;
    case "Commerce":
      cy.get("div.select > label[aria-label='Commerce']");
      break;
    case "Communications":
      cy.get("div.select > label[aria-label='Communications']");
      break;
    case "Consulting":
      cy.get("div.select > label[aria-label='Consulting']");
      break;
    case "CRM":
      cy.get("div.select > label[aria-label='CRM']");
      break;
    case "Data":
      cy.get("div.select > label[aria-label='Data']");
      break;
    case "Health":
      cy.get("div.select > label[aria-label='Health']");
      break;
    case "Inclusive XP":
      cy.get("div.select > label[aria-label='Inclusive XP']");
      break;
    case "Intelligence":
      cy.get("div.select > label[aria-label='Intelligence']");
      break;
    case "Production":
      cy.get("div.select > label[aria-label='Production']");
      break;
    case "Technology":
      cy.get("div.select > label[aria-label='Technology']");
      break;
  }
});

Cypress.Commands.add("acceptCookie", () => {
    cy.get(".ot-sdk-container > .ot-sdk-row", { timeout: 5000 }).should("be.visible");
    cy.get("#onetrust-accept-btn-handler").click();
});


