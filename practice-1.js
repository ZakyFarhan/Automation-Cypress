describe('Test', function () {
    it('TC-1',function(){
        //cy.visit untuk kunjungi url
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Zaky')
        cy.get('#lastName').type('Farhan')
        cy.get('#userEmail').type('zakyfarhan114@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('082213123123')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#currentAddress').type('jln.in aja dah')
        cy.get('#submit').click()
        
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})