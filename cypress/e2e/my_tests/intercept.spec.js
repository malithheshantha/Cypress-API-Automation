

describe("intercept suite",()=>{
    it("should be able to intercept",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.xpath('//table[1]/tbody/tr/td/a[@href="/posts"]').click();

        // cy.intercept({
        //     path : '/posts',


        // }).as('posts')

        // cy.get("table:nth-of-type(1) a[href='/posts']").click()
        // cy.wait('@posts').then(inter =>{
        //     cy.log(JSON.stringify(inter))
        //     console.log(JSON.stringify(inter))
        //     expect(inter.response.body).to.have.length(100)
                
        // })
        

    })

})