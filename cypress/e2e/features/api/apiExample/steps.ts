import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { isBoolean } from "cypress/types/lodash";

Given('As a user I want to execute a GET for all {string}', (items) => {
    cy.request({
      method: 'GET',
      url: 'https://simple-tool-rental-api.glitch.me/' + items,
      headers: {
        'Content-Type': 'application/json'  
      },
      failOnStatusCode:false
    }).as('get_tools_data')
  });

  Then('Verify {string} response status code is {int}', (requestAliasName, statusCode) => {
    cy.get(`${requestAliasName}`).should((response: any)=> {
      expect(response.status).to.eq(statusCode);
    })
  });

  Then('Verify response details for tool {string}', (toolName) => {
    cy.get('@get_tools_data').then((response: any)=> {
      cy.log(response.body[0].name);
      expect(response.body[0]).to.have.property('name');

      //1st Way
      expect(response.body[0]).to.have.nested.property('name',toolName);
      //2nd Way
      expect(response.body[0]).to.have.property('name',toolName);
      //3rd Way
      const name = response.body[0].name;
      assert.equal(name, toolName);

      /*response.body.forEach((row) => {
        cy.log(row.name + " -> In stock: " + row.inStock);
      });*/

      var findedTool = false;
      var index = 0;
      response.body.forEach((row) => {
        if (row.name == name)
        {
          findedTool = true;
          cy.log ("HERRAMIENTA ENCONTRADA EN ELEMENTO " +  index)
          index ++;
        }
      });

      cy.log(JSON.stringify(response.body[index]));

      expect(findedTool).eq(true)
    })
  });