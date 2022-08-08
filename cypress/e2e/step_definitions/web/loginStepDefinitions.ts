import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/web/LoginPage");

Given(
  'A user opens a saucelabs website in {}',
  (size : any) => {
      //debugger
      if (String(size).includes('[')) {
          let pixels = size.replace('[', '').replace(']', '').split(",").map(Number);
          cy.viewport(pixels[0], pixels[1])
        } else {
          cy.viewport(size);
      }
      cy.visit('/')
});