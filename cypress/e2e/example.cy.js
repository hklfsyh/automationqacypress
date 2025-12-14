describe('Contoh Test Otomasi Web', () => {
  it('Kunjungi halaman utama dan klik link', () => {
    // Kunjungi situs web Cypress Kitchen Sink
    cy.visit('https://example.cypress.io')

    // Klik pada teks 'type'
    cy.contains('type').click()

    // Periksa apakah URL sekarang mengandung '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })
})
