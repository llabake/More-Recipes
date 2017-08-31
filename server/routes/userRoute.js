import * as userController from '../controllers/v1/userController';

module.exports = (app) => {
  app.get('/api/users', (req, res) => res.status(200).send({
    message: 'Welcome to the user controller! You have to sign up',
    routes: {
      '/api/v1/users/signup': 'Sign up a user',
      '/api/v1/users/signin': 'Get token for a user'
    }
  }));

  app.post('/api/v1/users/signup', userController.signUp);
  app.post('/api/v1/users/signin', userController.signIn);
};
