/// <reference types='cypress' />

describe("put method",()=>{
    it("creating,editing and see the results of a user",()=>{

        let accToken = "Bearer 63cb09680503b6c9143aeb50cccd5d0ff0f1107f4daef0f0ab919447e7b387b1";

        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:accToken
            },
            body:{
                "name":"Automation testing",
                "email":"1jjhhghgh@gmail.com",
                "gender":"male",
                "status":"active",
            }
        }).then((res)=>{
                console.log(res);
                expect(res.status).to.eq(201);
                expect(res.body).have.property('name','Automation testing')
                expect(res.body).have.property('email','1jjhhghgh@gmail.com')
                expect(res.body).have.property('gender','male')
                expect(res.body).have.property('status','active')
        }).then((res1)=>{
            let theId = res1.body.id

            cy.request({
                method:'PUT',
                url:'https://gorest.co.in/public/v2/users/'+theId,
                headers:{
                    Authorization:accToken
                },
                body:{
                "name":"Automation testing mallit",
                "email":"11poijjhhghgh@gmail.com",
                "gender":"male",
                "status":"active",
                }
            }).then((res2)=>{
                console.log(res2);
                expect(res2.status).to.eq(200);
                expect(res2.body).have.property('name','Automation testing mallit')
                expect(res2.body).have.property('email','11poijjhhghgh@gmail.com')
                expect(res2.body).have.property('gender','male')
                expect(res2.body).have.property('status','active')
            }).then((res3)=>{
                let theId2 = res3.body.id

                cy.request({
                    method:'GET',
                    url:'https://gorest.co.in/public/v2/users/'+theId2,
                    headers:{
                        Authorization:accToken
                    }

                }).then((res4)=>{
                    console.log(res4)
                    expect(res4.status).to.eq(200);
                    expect(res4.body).have.property('name','Automation testing mallit')
                    expect(res4.body).have.property('email','11poijjhhghgh@gmail.com')
                    expect(res4.body).have.property('gender','male')
                    expect(res4.body).have.property('status','active')
                })
            })

        })

        




    })
});


