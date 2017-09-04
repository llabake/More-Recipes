const jwt = require('jsonwebtoken');

const secret = 'drtguug8*werty+uifghyu';


const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!(token)) {
    return res.status(401).json({
      error: 'Missing token. Expects token in header with key as Authorization'
    });
  }
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: 'Authentication failed. Invalid token.'
      });
    }
    req.user = decoded.data;
    next();
  });
};

export default authMiddleware;
