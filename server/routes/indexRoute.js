const indexRoute = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes.',
  })
  );
};

export default indexRoute;
