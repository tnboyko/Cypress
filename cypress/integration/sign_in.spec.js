/// <reference types="cypress" />

it('User can sign in with an existing data', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get(':nth-child(1) > .form-control').type('potato3@mail.ru').should('have.value', 'potato3@mail.ru');
    cy.get(':nth-child(2) > .form-control').type('12345678!').should('have.value', '12345678!');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').contains('potatoooo').should('exist');
});