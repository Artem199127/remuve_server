describe('My First Test', () => {
  it('finds the content "type"', () => {
    //cy.visit('file:///Users/artem.iurchenkov/Desktop/index.html')
    cy.visit(' https://qw.qa.afg-dev.net')
  /*
   cy.get('button[type="submit"]').click()
   cy.url().should('include', 'qa.afg-dev')

  cy.get('input[autocomplete="on"]').type('fake@email.com')
  cy.get('input[autocomplete="on"]').should('have.value', 'fake@email.com')
   
  cy.get('input[type="password"]').type('fake@email.com')
  cy.get('input[type="password"]').should('have.value', 'fake@email.com')


  cy.get('button[ aria-label="Show password text"]').click()

  */
 // cy.get('div')//.find('div').find('div').find('div').eq(10)
  //cy.get('div').eq(0).find('div')
  cy.get('div')




  })


})
 /*

describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://qw.qa.afg-dev.net')

    cy.get('form').find('div').eq(2)

  })


})
  */