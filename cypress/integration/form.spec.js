describe('Teste para o Formulário', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Verifica se possuí a classe', () => {
    cy.focused().should('have.class', 'form-control')
  })

  it('Verifica o input', () => {
    const input = "Aprender sobre Cypress"
    cy.get('.form-control')
      .type(input)
      .should('have.value', input)
  })

  it('Verifica se há dois itens iniciais', () => {
    cy.get('li')
      .should('have.length', 2)
  })

  it('Adicionando uma nova tarefa', () => {
    const input = "Aprender sobre Cypress"
    cy.get('.form-control')
      .type(input)
      .type('{enter}')
      .get('li')
      .should('have.length', 3)
  })

  it('Deletando uma tarefa', () => {
    cy.get('li')
      .first()
      .find('.btn-danger')
      .click()
      .get('li')
      .should('have.length', 1)
  })

  it('Deletando todas as tarefas', () => {
    cy.get('li')
      .first()
      .find('.btn-danger')
      .click()
      .get('li')
      .first()
      .find('.btn-danger')
      .click()
      .get('.no-task')
      .should('have.text', 'All of your tasks are complete. Nicely done!')
  })
})