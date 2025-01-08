Cypress.Commands.add('access', (
) => {
  const access = () => {
    // Visita a URL fornecida
    cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050')

   
  }
  access()
})

Cypress.Commands.add('selectedRoom', (
) => {
  const selectedRoom = () => {
    // Visita a URL fornecida
    cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050/reservation?checkin=2025-01-07&checkout=2025-01-09&adults=1&child1=0&child2=0&child3=0&resident=0')
   
  }
  selectedRoom()
})

Cypress.Commands.add('step', (
) => {
  const step = () => {
    // Visita a URL fornecida
    cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050/step3')
   
  }
  step()
})






