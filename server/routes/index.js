import IndexRoute from './indexRoute';
import UserRoute from './userRoute';
import RecipeRoute from './recipeRoute';

const routes = (app) => {
  IndexRoute(app);
  UserRoute(app);
  RecipeRoute(app);
};

export default routes;
