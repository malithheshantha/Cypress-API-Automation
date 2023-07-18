/// <reference types='cypress' />

let accToken = "Bearer 63cb09680503b6c9143aeb50cccd5d0ff0f1107f4daef0f0ab919447e7b387b1";

it("should be able to delete ",()=>{

cy.fixture('myData').then((fixData)=>{

    cy.request({
        method:'POST',
        url:'https://gorest.co.in/public/v2/users',
        headers:{
            Authorization:accToken
        },
        body:{
            "name":fixData.name,
            "email":fixData.email,
            "gender":fixData.gender,
            "status":fixData.status
        }
    }).then((res)=>{
        expect(res.status).to.eq(201);
        expect(res.body).have.property('name',fixData.name);
        expect(res.body).have.property('email',fixData.email);
        expect(res.body).have.property('gender',fixData.gender);
        expect(res.body).have.property('status',fixData.status);
    }).then((res1)=>{
        let id = res1.body.id
        cy.request({
            method:'DELETE',
            url:'https://gorest.co.in/public/v2/users/'+id,
            headers:{
                Authorization:accToken
            }

        }).then((res2)=>{
            expect(res2.status).to.eq(204); 
        })
    })

})
})