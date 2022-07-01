/* eslint-disable no-undef */
describe('React Node Template', function () {
  it('Front page can be opened', function () {
    cy.visit('/', { timeout: 480 * 1000 })
    cy.contains('React Node Template')
    cy.contains('containerized edition')
  })
  it('Navbar can be used to navigate', function () {
    cy.visit('/', { timeout: 480 * 1000 })
    cy.get('#firstOption').click()
    cy.contains('First Option')
  })
})