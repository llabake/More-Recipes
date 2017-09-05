import { Recipe, Favorite } from './../models';


export const isValidRecipe = (req, res, next) => {
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

import { Recipe } from './../models';

export const recipeExist = (req, res, next) => {
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

export const favoriteExists = (req, res, next) => {
  Favorite.findOne({
    where: {
      userId: req.decoded.user.id,
      recipeId: req.params.recipeId
    }
  })
    .then((favorite, err) => {
      if (err) {
        res.status(500).send(err);
      } else if (favorite) {
        return res.status(409).send({
          success: false,
          message: 'Recipe has already been favorited'
        });
      } else {
        next();
      }
    });
};
