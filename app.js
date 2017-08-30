import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

const port = process.env.PORT || 3000;

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to More Recipes.',
}));


app.listen(port,() => {
    console.log(`Server running on port ${port}`)
});

module.exports = app;