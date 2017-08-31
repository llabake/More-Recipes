const chai = require('chai');

const expect = chai.expect;
const userController = require('../controllers/v1/userController');


describe('User  Tests:', () => {
  describe('Post', () => {
    it('should not allow an empty username', () => {
      const User = function (user) { this.create = () => {}; };
      const req = {
        body: {
          email: ''
        }
      };
    });
  });
});
