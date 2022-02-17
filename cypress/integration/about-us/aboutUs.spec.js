import AboutUs from "./aboutUs.po";

const aboutUs = new AboutUs();

beforeEach(() => {
  cy.visit("");
  cy.acceptCookie();
});

describe(`[About Us]`, () => {
  it("[About Us] - Should validate all sub-navigation items", () => {
    cy.visit("");
    aboutUs.validateAboutUsTab();
  });
  it("[About Us] - Should directly open page and validate all leaders", () => {
    cy.visit("/about-us");
    aboutUs.validateLeaders();
  });
});
