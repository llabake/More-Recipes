import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './server/routes';
import db from './server/models';


// Set up the express app
const app = express();
import consign from 'consign';

// Log requests to the console.
app.use(logger('dev'));

const port = process.env.PORT || 3000;

// Parse incoming requests data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Call all routes with app instance
routes(app);

consign({ verbose: false })
  .then('server/models/index.js')
  .into(app);

if (process.env.NODE_ENV !== 'test') {
  db.sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  });
}

module.exports = app;
