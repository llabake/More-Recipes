export const signUpValidator = (req, res, next) => {
  const errors = [];
  if (!req.body.username) {
    errors.push({ path: 'username', message: 'username is required' });
  }
  if (!req.body.firstName) {
    errors.push({ path: 'firstName', message: 'firstName is required' });
  }
  if (!req.body.lastName) {
    errors.push({ path: 'lastName', message: 'lastName is required' });
  }
  if (!req.body.email) {
    errors.push({ path: 'email', message: 'email is required' });
  }
  if (!req.body.password) {
    errors.push({ path: 'password', message: 'password is required' });
  }
  if (!req.body.confirmpassword) {
    errors.push({ path: 'confirmpassword', message: 'confirmpassword is required' });
  }
  if (req.body.password != req.body.confirmpassword) {
    errors.push({ path: 'password', message: 'Please ensure the Password match' });
  }
  if (errors.length === 0) {
    next();
  } else {
    res.status(400).json({ errors });
  }
};

export const signInValidator = (req, res, next) => {
  const errors = [];
  if (!req.body.username) {
    errors.push({ path: 'username', message: 'username is required' });
  }
  if (!req.body.password) {
    errors.push({ path: 'password', message: 'password is required' });
  }
  if (errors.length === 0) {
    next();
  } else {
    res.status(400).json({ errors });
  }
};
