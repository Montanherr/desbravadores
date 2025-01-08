describe("Locação", () => {
  it("Deve acessar o endereço https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050", () => {
    cy.access();
  // Confirma se acessou a pagina.
  cy.wait(15000);
  cy.get("#calendar") // Seleciona o elemento com o id 'calendar'
   // Verifica se o calendário está visível

  });

  it("Deve verificar a disponibilidade de reserva para no minímo 03 dias", () => {
    cy.access();
    // Espera o componente de calendário estar visível antes de interagir
    cy.wait(15000);
    cy.get("#calendar") // Seleciona o elemento com o id 'calendar'
      .should("be.visible"); // Verifica se o calendário está visível

    cy.get(".month1 > tbody > :nth-child(2) > :nth-child(4) > .day").click(), {delay: 50}; // seleciona o primeiro dia desejavel
    cy.wait(3000); 
    cy.get(".month1 > tbody > :nth-child(2) > :nth-child(6) > .day").click(), {delay: 50}; // espera 5s e seleciona o outro dia no calendario
    cy.wait(4000); 
    cy.contains('button', 'Verificar Disponibilidade').click({ force: true });    // Clica no botão
  });

it('Deve adicionar na reserva 02 Adultos e 01 Criança de até 05 anos / preencher os dados do cartão de credito ', () => {
  cy.selectedRoom();
  cy.wait(30000); 
  cy.get(':nth-child(2) > :nth-child(4) > :nth-child(1) > :nth-child(1) > .col-12.col-md-12 > .rate-list > .collapse > .rate-list-content > .justify-content-center > :nth-child(4) > .pax-select > .mb-3 > .form-select')
  .select('2')
  .should('have.value', '2');
  cy.get('.button-value.btn.btn-secondary')
  .invoke('text', '1'); // Modifica o texto do botão para "1"// Define o valor do botão
  cy.contains('button', 'Adicionar').click({ force: true });    // Clica no botão
  cy.wait(10000); 
  cy.get('.sc-fAUdSK').click({ force: true });  
  cy.wait(10000); 
  cy.get('.col-12 > .sc-fAUdSK').click({ force: true });  
  cy.get('input[name="email"]') // Seleciona o input pelo atributo name="email"
  .type('teste@gmail.com', { delay: 80 }); // Digita um valor no campo
  cy.get('input[name="number"]') // Seleciona o input pelo atributo name="number"
  .type('4000 0000 0000 0044', { delay: 80 }); // Digita um valor no campo
  cy.get('input[name="name"]') // Seleciona o input pelo atributo name="name"
  .type('DESBRAVADOR SOFTWARE', { delay: 80 }); // Digita um valor no campo
  cy.get('input[name="expiry"]') // Seleciona o input pelo atributo name="expiry"
  .type('12/34', { delay: 80 }); // Digita um valor no campo
  cy.get('input[name="cvc"]') // Seleciona o input pelo atributo name="cvc"
  .type('123', { delay: 80 }); // Digita um valor no campo
  cy.get(':nth-child(1) > .col-md-12 > .form-check > .form-check-input')
  .check(); 
  cy.get('.form-check-input').eq(0) // Marca o primeiro checkbox
  .check();
  cy.contains('button', 'Finalizar').click({ force: true });    // Clica no botão

})

})


 
