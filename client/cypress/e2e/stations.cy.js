/**
 * Cypress test spec for /stations
 */
 describe('Station list view', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/stations')
    })
  
    it('renders table of stations', () => {
      cy.get('table').should('exist')
      cy.get('tr').should('have.length', 11)
    })
  
    it('able to view next page', () => {
      cy.get('.next-btn').click()
      cy.get('table').get('tbody').contains('Tapionaukio')
    })
  
    it('able to view previous page', () => {
      cy.get('.previous-btn').click()
      cy.get('table').get('tbody').contains('Hanasaari')
    })
  
    it('able to search by station name', () => {
      cy.get('.station-search').type('Kamppi')
      cy.get('table').get('tbody').contains('Kamppi')
    })
  
    it('able to backout from search', () => {
      cy.get('.station-search').type(' ')
      cy.get('table').get('tbody').contains('Hanasaari')
    })

    it('able to view single station', () => {
        cy.get('table').get('tbody').contains('Hanasaari').click()
        cy.contains('Hanasaari / Hanaholmen')
        cy.get('.single-table-stats').should('exist')
        cy.get('.single-table').should('exist')
        cy.get('.single-tr').should('have.length', 8)
    })  
  })