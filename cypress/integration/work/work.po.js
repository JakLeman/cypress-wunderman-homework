var selectors = {
  labels: {
    workLabel: ".menu > .work",
    subMenuWork: ".submenu-wrapper > .about-us",
    atAGlance: "nav > [href*='/about-us']",
    contactLabel: "nav > [href*='/contact-us']",
    officesLabel: "nav > [href*='/offices']",
    cookieAccept: "#onetrust-accept-btn-handler",
  },
  objects: {
    wtLogo: ".nav-wrapper > .logo > .wt-logo",
    cookieBar: ".ot-sdk-container > .ot-sdk-row",
    leadershipSection: ".people-section",
  },
  dropdowns: {
    workExpertise: ":nth-child(1) > .tab",
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
      cy.get(":nth-child(1) > .tab-body")
        .scrollIntoView()
        .children()
        .should("contain", value);
    });
  }
  validateRandomElement() {
    cy.log(randomWorkExpertise);
    cy.point(randomWorkExpertise).should("be.exist").click();
    cy.get(".selected-options")
      .should("be.visible")
      .and("contain.text", randomWorkExpertise);
    cy.get(".tab.link.active").click();
  }
}

export default Work;
