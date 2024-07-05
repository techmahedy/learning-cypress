export default class googleHomePage {
  /**
   * visiting google home page
   */
  visitGoogleHomePage() {
    cy.visit("https://google.com");
  }

  clickOnGoogleSearchInputField() {
    cy.get("#APjFqb").click();
  }
}
