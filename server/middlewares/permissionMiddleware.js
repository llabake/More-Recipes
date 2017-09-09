import { Recipe } from './../models';

const isRecipeOwner = (req, res, next) => {
  Recipe.findOne({
    where: {
      id: req.params.recipeId
    }
  }).then((recipe, err) => {
    if (err) {
      res.status(500).send(err);
    } else if (!recipe) {
      res.status(404).json({ message: 'Recipe not found' });
    } else if (recipe.userId === req.user.id) {
      next();
    } else {
      res.status(403).json({ message: 'Permission denied. You are not the owner of this recipe. Thief' });
    }
  });
};

export default isRecipeOwner;
