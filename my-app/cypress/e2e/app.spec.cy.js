describe('template spec', () => {
  beforeEach(() => {
    cy.fixture('example.json').as('example')
  });
  it('open app and drop a file', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=dropzone]').should('be.visible')
        .selectFile('@example', { action: 'drag-drop', force: true });
    cy.get('.files').should('contain', 'example.json');
  })
})