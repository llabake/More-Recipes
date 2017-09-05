import * as recipeController from '../controllers/v1/recipeController';
import authMiddleware from '../middlewares/authMiddleware';
import { isRecipeOwner } from '../middlewares/permissionMiddleware';
import { recipeExist } from '../middlewares/modelExistMiddleware'

const recipeRoute = (app) => {
  app.post('/api/v1/recipes', authMiddleware, recipeController.addRecipe);
  app.put('/api/v1/recipes/:recipeId(\\d+)/', authMiddleware, isRecipeOwner,
    recipeController.modifyRecipe);
  app.delete('/api/v1/recipes/:recipeId(\\d+)/', authMiddleware, isRecipeOwner,
    recipeController.deleteRecipe);
  app.get('/api/v1/recipes/', authMiddleware,
    recipeController.getAllRecipes);
  app.post('/api/v1/recipes/:recipeId(\\d+)/votes/', authMiddleware, recipeExist,
    recipeController.voteRecipe);
};

export default recipeRoute;
