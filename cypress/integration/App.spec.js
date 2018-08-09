describe('User IO app test suite', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  it('The app has main <div> styled as App class', function () {
    cy.get('#root>div').should('have.class', 'App')
  })

  it('Right button should be hidden', function () {
    cy.get('button').eq(1).should('be.hidden')
  })

  it('Left button click changes the names in the left cards', function () {
    cy.get('button').eq(0).should('be.visible').then(($button) => {
      $button.click()
      cy.get('.UserOutput>p:first-child').should(($p) => {
        expect($p.eq(0)).to.contain('Batman')
        expect($p.eq(1)).to.contain('Alex')
        expect($p.eq(2)).to.contain('Andrew')
        expect($p.eq(3)).to.contain('Alexa')
      })
    })
  })

  it('Left input should be empty', function () {
    cy.get('input').eq(0).should('have.value', '')
  })

  it('A name typed into left input should be displayed in left cards', function () {
    cy.get('input').first().type('Bogeyman')
    cy.get('.UserOutput>p:first-child').should(($p) => {
      expect($p.eq(0)).to.contain('Bogeyman')
      expect($p.eq(1)).to.contain('Bogeyman')
      expect($p.eq(2)).to.contain('Bogeyman')
      expect($p.eq(3)).to.contain('Bogeyman')
    })
  })

  it('A name in the right input and in the first card on the right should match', function () {
    cy.get('input').eq(1).then((lastInput) => {
      cy.get('.UserOutput>p:first-child').eq(4).should('contain', lastInput[0].value)
    })
  })

  it('When name changes in the right input it should be reflected only in the first card on the right', function () {
    cy.get('input').last().type('Bogeyman')
    cy.get('.UserOutput>p:first-child').should(($p) => {
      expect($p.eq(4)).to.contain('Bogeyman')
      expect($p.eq(5)).to.contain('Kane')
      expect($p.eq(6)).to.contain('Keith')
      expect($p.eq(7)).to.contain('Kurt')
    })
  })
})