/// <reference types='cypress' />

let getData = require('../../fixtures/myData')

let accToken = "Bearer 63cb09680503b6c9143aeb50cccd5d0ff0f1107f4daef0f0ab919447e7b387b1";
let randomEmail = "";
let randomFinalEmail="";
it('my second api test',()=>{
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz";
    for(let i=0;i<10;i++)
    randomEmail = randomEmail+pattern.charAt(Math.floor(Math.random()*pattern.length)); 
    randomFinalEmail=randomEmail+'@gmail.com';

    cy.fixture('myData').then((payload)=>{

    cy.request({
        method: 'POST',
        url:'https://gorest.co.in/public/v2/users',
        headers:{
            Authorization:accToken
        },
        body:{
            name:payload.name,
            email:randomFinalEmail,
            gender:payload.gender,
            status:payload.status
        }
    }).then((res)=>{
        console.log(res);
        expect(res.status).to.eq(201);
        expect(res.body).have.property("name",payload.name);
        expect(res.body).have.property("email",randomFinalEmail);
        expect(res.body.gender).to.eq(payload.gender);
        expect(res.body.status).to.eq(payload.status);
    }).then((res)=>{
        console.log(res);
        const newId = res.body.id;
        
        cy.request({
            method: 'GET',
            url:'https://gorest.co.in/public/v2/users/'+newId,
            headers:{
                Authorization:accToken
            }
        }).then((res1)=>{
            expect(res1.status).to.eq(200);
            expect(res1.body).have.property("name",payload.name);
            expect(res1.body).have.property("email",randomFinalEmail);
            expect(res1.body.gender).to.eq(payload.gender);
            expect(res1.body.status).to.eq(payload.status);
        })
    });
});
});