var selectors = {
  labels: {
    workLabel: ".menu > .work",
    subMenuWork: ".submenu-wrapper > .about-us",
    atAGlance: "nav > [href*='/about-us']",
    contactLabel: "nav > [href*='/contact-us']",
    officesLabel: "nav > [href*='/offices']",
    cookieAccept: "#onetrust-accept-btn-handler",
    subCategoryItem: ".selected-options",
  },
  objects: {
    wtLogo: ".nav-wrapper > .logo > .wt-logo",
    cookieBar: ".ot-sdk-container > .ot-sdk-row",
    leadershipSection: ".people-section",
  },
  dropdowns: {
    workExpertise: ":nth-child(1) > .tab",
    workExpertiseExpended: ":nth-child(1) > .tab-body",
    workExpertiseActivated: ".tab.link.active",
  },
};

var workExpertiseArray = [
  "Apps",
  "B2B",
  "Commerce",
  "Communications",
  "Consulting",
  "CRM",
  "Data",
  "Health",
  "Inclusive XP",
  "Intelligence",
  "Production",
  "Technology",
];

var randomWorkExpertise =
  workExpertiseArray[Math.floor(Math.random() * workExpertiseArray.length)];

class Work {
  openWorkTab() {
    cy.get(selectors.labels.workLabel).should("be.visible").click();
    cy.get(selectors.dropdowns.workExpertise)
      .scrollIntoView()
      .should("be.visible")
      .click();
  }
  chooseRandomCategory() {
    workExpertiseArray.forEach(function (value) {
      cy.get(selectors.dropdowns.workExpertiseExpended)
        .scrollIntoView()
        .children()
        .should("contain", value);
    });
  }
  validateRandomElement() {
    cy.log(randomWorkExpertise);
    cy.point(randomWorkExpertise).should("be.exist").click();
    cy.get(selectors.labels.subCategoryItem)
      .should("be.visible")
      .and("contain.text", randomWorkExpertise);
    cy.get(selectors.dropdowns.workExpertiseActivated).click();
  }
}

export default Work;
