import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const visualTestingPage = require("../../../pages/web/VisualTestingPage")
  
  Given("A user opens the {string} website", (url) => {
    cy.visit(url);
  });

  Then ("The page title has the text {string}", (titleLabel) => {
    visualTestingPage.elements.pageTittle().should('have.text',titleLabel);
  });