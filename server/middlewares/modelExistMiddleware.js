import { Recipe } from './../models';

const recipeExist = (req, res, next) => {
  Recipe.findOne({
    where: {
      id: req.params.recipeId
    }
  }).then((recipe, err) => {
    if (err) {
      res.status(500).send(err);
    } else if (!recipe) {
      res.status(404).json({ message: 'Recipe not found' });
    } else {
      next();
    }
  });
};

export default recipeExist;
