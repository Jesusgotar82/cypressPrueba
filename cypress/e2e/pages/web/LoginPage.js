class homeSauceLoginPage {
    //selectores por elemento
    elements = {
      usernameInput: () => cy.get("#user-name"),
      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get("#login-button"),
      errorMessage: () => cy.get('h3[data-test="error"]'),
    };
  
    //acciones por elemento

    //escribe nombre de usuario
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    //Escribe password
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    //click en boton login
    clickLogin() {
      this.elements.loginBtn().click();
    }
  }
  
  module.exports = new homeSauceLoginPage();