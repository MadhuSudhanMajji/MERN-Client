//example.cy.js
describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/')
        //visit(url) to visit BaseUrl
        cy.contains('welcome')
        cy.contains('register')
        //if a text is present in the document
    })
});