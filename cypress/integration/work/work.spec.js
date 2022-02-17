import Work from "./work.po";

const work = new Work();

beforeEach(() => {
  cy.visit("");
  cy.acceptCookie();
});

describe(`[Work]`, () => {
  it("[Work] - Should validate all sub-navigation items", () => {
    work.openWorkTab();
    work.chooseRandomCategory();
    work.validateRandomElement();
  });
});
