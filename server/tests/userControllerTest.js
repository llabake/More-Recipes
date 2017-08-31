const chai = require ('chai');
const expect = chai.expect;
const userController = require('../controllers/v1/userController');


describe('User  Tests:', function(){

    describe('Post' ,function(){

        it('should not allow an empty username' ,function(){
            const User = function(user){this.create =()=>{}};

            const req = {
                body: {
                    email: ''
                }
            }

        })

    })
})
