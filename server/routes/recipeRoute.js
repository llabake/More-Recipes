import * as recipeController from '../controllers/v1/recipeController';
import authMiddleware from '../middlewares/authMiddleware';


const recipeRoute = (app) => {
  app.post('/api/v1/recipes', authMiddleware, recipeController.addRecipe);
};

export default recipeRoute;
