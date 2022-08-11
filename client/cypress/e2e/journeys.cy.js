/**
 * Cypress test spec for /journeys
 */
describe('Journey list view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/journeys')
  })

  it('renders table of journeys', () => {
    cy.get('table').should('exist')
    cy.get('tr').should('have.length', 16)
  })

  it('able to view next page', () => {
    cy.get('.next-btn').click()
    cy.get('table').get('tbody').contains('Varsapuistikko')
  })

  it('able to view previous page', () => {
    cy.get('.previous-btn').click()
    cy.get('table').get('tbody').contains('Arabiankatu')
  })

  it('able to search by station name', () => {
    cy.get('.journey-search').type('Kamppi')
    cy.get('table').get('tbody').contains('Kamppi')
  })

  it('able to backout from search', () => {
    cy.get('.journey-search').type(' ')
    cy.get('table').get('tbody').contains('Arabiankatu')
  })

})