describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaurz')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon link can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('caterpie').click();
    cy.contains('shield dust')
    cy.contains('run away')
  })
})