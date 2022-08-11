/**
 * Test home page
 */
describe('Home page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    
    it('renders 2 buttons', () => {
      cy.get('.journeys-btn').should('exist')
      cy.get('.stations-btn').should('exist')
    })

    it('journey button works', () => {
        cy.get('.journeys-btn').click()
        cy.get('table').should('exist')
        cy.get('tr').should('have.length', 16)
    })

    it('station button works', () => {
        cy.get('.stations-btn').click()
        cy.get('table').should('exist')
        cy.get('tr').should('have.length', 11)
    })

    it ('Has text', () => {
        cy.contains('Helsinki City Bikes in numbers!')
    })
  
})