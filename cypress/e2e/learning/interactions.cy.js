/ <reference types="cypress" />

describe("learn about locators", () => { 

    it.skip("interacting with input field",() => {
        //visiting google home page
        cy.visit("https://google.com");
    });

    it.skip("click on search input field and see suggestion dropdown",() => {
        //clicking on the input field
        cy.get('#APjFqb').click();
        
        //search trending dropdown after the clicking on the input field
        cy.get('.OBMEnb > .ynRric').as('searchTrendingDropdown');
        cy.get('@searchTrendingDropdown')
            .should('be.visible')
            .contains('ট্রেন্ডিং');

        //clicking on the google logo
        cy.get('.lnXdpd').click();
       
        //search trending dropdown should not be visible after clicking on the logo
        cy.get('@searchTrendingDropdown').should('not.be.visible');
    });

    it.skip("type laravel on the search input field and assert suggestion and click on second result",() => {
        //typing on google search input field
        cy.get('.gLFyf').type('laravel');
        
        //dropdown list after the typing on input field
        cy.get('.OBMEnb > ul')
            .find('li')
            .eq(1)
            .contains('laravel documentation')
            .click();
    });

    it("type laravel on the search input field and press enter to search",() => {
        //visiting google home page
        cy.visit("https://google.com");
        //typing on google search input field and press enter
        cy.get('#APjFqb').type('laravel documentation {enter}', { delay:500 });
    });

 });