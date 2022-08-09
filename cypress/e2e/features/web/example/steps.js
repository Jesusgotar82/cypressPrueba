import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../../pages/web/LoginPage");

Given("A user opens a saucelabs website", () => {
  cy.visit("/");
});