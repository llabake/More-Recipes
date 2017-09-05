import { Favorite } from './../../models';


export const addToFavorite = (req, res) => {
  Favorite.create({
    userId: req.user.id,
    recipeId: req.params.recipeId
  })
    .then(favorite => res.status(201).json({ favorite,
      message: 'Your recipe has been favorited' }))
    .catch(error => res.status(400).json({ error }));
};

export const getFavoriteRecipes = (req, res) => {
  Favorite.findAll({
    where: {
      userId: req.user.id
    },
  })
    .then((recipe, err) => {
      if (!recipe) {
        res.status(201).send({
          message: 'No Favorite Recipes found',
        });
      } else if (err) {
        res.status(400).json({ message: 'error sending your request', err });
      } else {
        return res.status(200).json(recipe);
      }
    });
};


