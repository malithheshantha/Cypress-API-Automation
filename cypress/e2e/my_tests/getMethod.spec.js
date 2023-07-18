/// <reference types='cypress' />

let accToken = "Bearer 63cb09680503b6c9143aeb50cccd5d0ff0f1107f4daef0f0ab919447e7b387b1";

describe('API first test suite',()=>{
    it('my first api',()=>{

        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:accToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200);
        });

    });

})
