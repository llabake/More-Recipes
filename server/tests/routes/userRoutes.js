const chai = require('chai');

const expect = chai.expect;

describe('User route:', () => {
  describe('Test Sign Up funtionality', () => {
    it('it should return an array', (done) => {
      request.post('/api/v1/users/signup')
        .send({})
        .end((err, res) => {
          expect(400);
          expect(res.body.errors).to.be.an('array');
          done(err);
        });
    });
    it('it should return an array of errors to validate user input', (done) => {
      request.post('/api/v1/users/signup')
        .send({})
        .end((err, res) => {
          expect(400);
          expect(res.body).to.eql({
            errors: [
              {
                path: 'username',
                message: 'username is required'
              },
              {
                path: 'firstName',
                message: 'firstName is required'
              },
              {
                path: 'lastName',
                message: 'lastName is required'
              },
              {
                path: 'email',
                message: 'email is required'
              },
              {
                path: 'password',
                message: 'password is required'
              },
              {
                path: 'confirmpassword',
                message: 'confirmpassword is required'
              }
            ]
          });
          done(err);
        });
    });
    it('it should return an errors as type of array', (done) => {
      request.post('/api/v1/users/signup')
        .send({ username: '',
          email: '',
          password: '',
          confirmpassword: '',
          firstName: '',
          lastName: ''
        })
        .end((err, res) => {
          expect(400);
          expect(res.body.errors).to.be.an('array');
          done(err);
        });
    });
    it('it should return 6 as the length of the array', (done) => {
      request.post('/api/v1/users/signup')
        .send({ username: '',
          email: '',
          password: '',
          confirmpassword: '',
          firstName: '',
          lastName: ''
        })
        .end((err, res) => {
          expect(400);
          expect(res.body.errors).to.have.lengthOf(6);
          done(err);
        });
    });
    it('it should return array of object containing the path and message of the error with the length of the array', (done) => {
      request.post('/api/v1/users/signup')
        .send({
          email: 'dd@gmail.com',
          password: 'smoky',
          confirmpassword: 'smoky',
          firstName: 'adedamola',
          lastName: 'wuraola' })
        .end((err, res) => {
          expect(400);
          expect(res.body.errors[0]).to.eql({ path: 'username', message: 'username is required' });
          expect(res.body.errors).to.have.lengthOf(1);
          done(err);
        });
    });
    it('it should return please ensure the Password match', (done) => {
      request.post('/api/v1/users/signup')
        .send({ username: 'damola',
          email: 'dd@gmail.com',
          password: 'smoky',
          confirmpassword: 'smokky',
          firstName: 'adedamola',
          lastName: 'wuraola' })
        .end((err, res) => {
          expect(400);
          expect(res.body).to.eql({
            errors: [
              {
                path: 'password', message: 'Please ensure the Password match'
              }
            ]
          });
          done(err);
        });
    });
    it('it should return a new user', (done) => {
      request.post('/api/v1/users/signup')
        .send({ username: 'damola',
          email: 'dd@gmail.com',
          password: 'smoky',
          confirmpassword: 'smoky',
          firstName: 'adedamola',
          lastName: 'wuraola' })
        .end((err, res) => {
          expect(201);
          expect(res.body).to.eql({ message:
            'Your account has been created' });
          done(err);
        });
    });
    it('it should return user already exists', (done) => {
      request.post('/api/v1/users/signup')
        .send({ username: 'damola',
          email: 'dd@gmail.com',
          password: 'smoky',
          confirmpassword: 'smoky',
          firstName: 'adedamola',
          lastName: 'wuraola' })
        .end((err, res) => {
          expect(400);
          expect(res.body).to.eql({ message:
            'User already exists' });
          done(err);
        });
    });
  });
});

describe('User route:', () => {
  describe('Test Sign In functionality', () => {
    // let restoken=res.body.token;
    it('it should return an authenticated user', (done) => {
      request.post('/api/v1/users/signin')
        .send({ username: 'damola',
          password: 'smoky' })

        .end((err, res) => {
          expect(200);
          expect(res.body.message).to.eql(
            'user logged in',
          );
          done(err);
        });
    });
    it('it should return an authenticated user', (done) => {
      request.post('/api/v1/users/signin')
        .send({ username: 'damola',
          password: 'smoky' })

        .end((err, res) => {
          expect(200);
          expect(res.body.token).to.exist;
          done(err);
        });
    });
    it('it should return incorrect credentials', (done) => {
      request.post('/api/v1/users/signin')
        .send({ username: 'damola',
          password: 'shigbo' })
        .end((err, res) => {
          expect(200);
          expect(res.body.message).to.eql(
            'Incorrect credentials, please check username or password',
          );
          done(err);
        });
    });
    it('it should return incorrect credentials', (done) => {
      request.post('/api/v1/users/signin')
        .send({ username: 'ddamola',
          password: 'smoky' })
        .end((err, res) => {
          expect(400);
          expect(res.body.message).to.eql(
            'Authentication failed. Incorrect credentials.',
          );
          done(err);
        });
    });
    it('it should return array of object containing the path and message of the error with the length of the array', (done) => {
      request.post('/api/v1/users/signin')
        .send({
          password: 'smoky'
        })
        .end((err, res) => {
          expect(400);
          expect(res.body.errors[0]).to.eql({ path: 'username', message: 'username is required' });
          expect(res.body.errors).to.have.lengthOf(1);
          done(err);
        });
    });
    it('it should return array of object containing the path and message of the error with the length of the array', (done) => {
      request.post('/api/v1/users/signin')
        .send({
          username: 'damola'
        })
        .end((err, res) => {
          expect(400);
          expect(res.body.errors[0]).to.eql({ path: 'password', message: 'password is required' });
          expect(res.body.errors).to.have.lengthOf(1);
          done(err);
        });
    });
  });
});

