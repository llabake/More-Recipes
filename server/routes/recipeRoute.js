import * as recipeController from '../controllers/v1/recipeController';
import authMiddleware from '../middlewares/authMiddleware';
import isRecipeOwner from '../middlewares/permissionMiddleware';
import recipeExist from '../middlewares/recipeExistMiddleware';

const recipeRoute = (app) => {
  app.post('/api/v1/recipes', authMiddleware, recipeController.addRecipe);
  app.put('/api/v1/recipes/:recipeId(\\d+)/', authMiddleware, isRecipeOwner,
    recipeController.modifyRecipe);
  app.delete('/api/v1/recipes/:recipeId(\\d+)/', authMiddleware, isRecipeOwner,
    recipeController.deleteRecipe);
  app.get('/api/v1/recipes/:recipeId(\\d+)/', authMiddleware,
    recipeController.findARecipe);
  app.get('/api/v1/recipes/', authMiddleware,
    recipeController.getAllRecipes);
  app.post('/api/v1/recipes/:recipeId(\\d+)/votes/',
    authMiddleware, recipeExist, recipeController.voteRecipe);
  app.post('/api/v1/users/:userId(\\d+)/recipes/:recipeId(\\d+)/',
    authMiddleware, recipeExist, recipeController.addRecipeAsFavorite);
  app.get('/api/v1/users/:userId(\\d+)/recipes/', authMiddleware,
    recipeController.getFavoriteRecipes);
  app.post('/api/v1/recipes/:recipeId(\\d+)/reviews/', authMiddleware,
    recipeExist, recipeController.postReview);
  app.get('/api/recipes?sort=upvotes&order=ascending', authMiddleware,
    recipeController.voteRecipe);
};

export default recipeRoute;
