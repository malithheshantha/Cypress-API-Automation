/// <reference types='cypress' />

describe('play with a oauth 2.0',()=>{
        let token = "";
        let userId = "";

        beforeEach(()=>{
            cy.request({
                method:'POST',
                url:'/token',
                form:true,
                body:{
                    "client_id":"ewe",
                    "client_secret":"0ec2b62af9a7823eedc54b63bcd793b8",
                    "grant_type":"client_credentials",
                }
            
            }).then(res=>{
                console.log(res);
                token= res.body.access_token;
                console.log(token)
                cy.request({
                    method:'GET',
                    url:'/api/me',
                    headers:{
                        'Authorization':'Bearer '+token
                    }
        
                }).then(res=>{
                    console.log(res);
                    userId = res.body.id;
                    console.log(userId);
        
                })
            });

        })
            it("unlock barn",()=>{
            cy.request({
                method:'POST',
                    url:'/api/'+userId+'/barn-unlock',
                    headers:{
                        'Authorization':'Bearer '+token
                    }
            
            }).then(res=>{
                console.log(res);
                
            });
        })
        it("toilet seat down",()=>{
            cy.request({
                method:'POST',
                    url:'/api/'+userId+'/toiletseat-down',
                    headers:{
                        'Authorization':'Bearer '+token
                    }
            
            }).then(res=>{
                console.log(res);
                
            });
        })
})