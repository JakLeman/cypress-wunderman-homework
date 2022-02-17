var selectors = {
  labels: {
    aboutUsLabel: "a[class='about-us']",
    workLabel: ".menu > .work",
    subMenuAboutUs: ".submenu-wrapper > .about-us",
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

var leaderShipArray = [
  "Mel Edwards",
  "Bas Korsten",
  "Daniel Bonner",
  "Maree Prendergast",
  "Neil Dawson",
  "Ezinne (Kwubiri) Okoro",
  "Naomi Troni",
  "Caroline Foster Kenny",
  "Diane Holland",
  "Audrey Melofchik",
  "Ewen Sturgeon",
  "Juan Pablo Jurado",
  "Becky Chidester",
  "Neil Stewart",
  "Andrew Rutberg",
];

class AboutUs {
  validateAboutUsTab() {
    cy.get(selectors.labels.aboutUsLabel).should("be.visible").click();
    cy.get(selectors.labels.subMenuAboutUs).should("be.visible");
    cy.get(selectors.labels.atAGlance).should("be.visible");
    cy.get(selectors.labels.contactLabel).should("be.visible");
    cy.get(selectors.labels.officesLabel).should("be.visible");
  }
  validateLeaders() {
    leaderShipArray.forEach(function (value) {
      cy.get(selectors.objects.leadershipSection)
        .scrollIntoView()
        .children()
        .should("contain", value);
    });
  }
}

export default AboutUs;
