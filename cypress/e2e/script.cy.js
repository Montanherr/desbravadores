describe("Locação", () => {
  it("Deve acessar o endereço https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050", () => {
    cy.access();
  });
  it("Deve verificar a disponibilidade de reserva para no minímo 03 dias", () => {
    cy.access();
    // Espera o componente de calendário estar visível antes de interagir
    cy.wait(15000);
    cy.get("#calendar") // Seleciona o elemento com o id 'calendar'
      .should("be.visible"); // Verifica se o calendário está visível

    cy.get(".month1 > tbody > :nth-child(2) > :nth-child(4) > .day").click(), {delay: 50};
    cy.wait(3000);
    cy.get(".month1 > tbody > :nth-child(2) > :nth-child(6) > .day").click(), {delay: 50};
    cy.get("button", { delay: 1000}) // Seleciona todos os botões na página
      .contains("Verificar Disponibilidade") // Garante que o botão contém o texto desejado
      .click(); // Clica no botão
  });
  it('Deve selecionar o quarto STANDARD ST1', () => { 
    cy.selectedRoom();
    cy.wait(20000);
    cy.get(':nth-child(2) > :nth-child(4) > :nth-child(1) > :nth-child(1) > .col-12.col-md-12 > .rate-list > .collapse > .rate-list-content > .justify-content-center > :nth-child(4) > .btn-add-container > .btn-add').click()  })
  //it('Deve adicionar na reserva 02 Adultos e 01 Criança de até 05 anos', () => {})
  //it('Deve informar informar a quantidade de hospedes da reserva', () => {  })
  // it('Deve efetuar o pagamento com cartão de crédito', () => { })
});
