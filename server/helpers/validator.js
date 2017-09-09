export const signUpValidator = (req, res, next) => {
  const errors = [];
  const requiredFields = ['username', 'firstName', 'lastName', 'email', 'password', 'confirmpassword']
  requiredFields.forEach((field) => {
    if (!req.body[field]) {
      errors.push({ path: field, message: `${field} is required` });
    }
  })
  if (req.body.password !== req.body.confirmpassword) {
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
  const requiredFields = ['username', 'password'];
  requiredFields.forEach((field) => {
    if (!req.body[field]) {
      errors.push({ path: field, message: `${field} is required` });
    }
  })
  if (errors.length === 0) {
    next();
  } else {
    res.status(400).json({ errors });
  }
};
