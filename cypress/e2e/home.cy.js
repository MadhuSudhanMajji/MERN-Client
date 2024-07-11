describe('Home Page test',()=>{
    it('Check The Input Field',()=>{
        cy.visit('/');
        cy.get('input').type('cinderella')
        cy.get('button').should('be.visible')
        cy.get('button').click();
        cy.contains('cinderella')
        cy.get('input').type('Cinderella')
        cy.get('input').should('have.value','cindrella')
    })
})