/ <reference types="cypress" / >
  describe("learn about locators", () => {
    it("visit google home page", () => {
      //visiting google home page
      cy.visit("https://google.com");
    });

    it("it can locate a button on the page", () => {
      //clicking on the input field
      cy.get("#APjFqb")
        .should("be.visible")
        .and("have.class", "gLFyf")
        .and("have.value", "")
        .and("have.attr", "maxlength", "2048");
    });
  });
