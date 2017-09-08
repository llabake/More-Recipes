const chai = require('chai');

const expect = chai.expect;

describe('Index route:', () => {
  // describe('Post' ,function(){
  { it('it should return welcome message', () => {
    request.get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.eql({ message: 'Welcome to More Recipes.' });
        done(err);
      });
  }); }
});
