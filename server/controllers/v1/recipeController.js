import { Recipe } from './../../models';

export const addRecipe = (req, res) => Recipe.create({
  title: req.body.title,
  image: req.body.image,
  direction: req.body.direction,
  ingredients: req.body.ingredients,
  userId: req.user.id
})
  .then(recipe => res.status(201).json({ recipe,
    message: 'Your recipe has been added' }))
  .catch((error) => {
    res.status(400).json({ error });
  });


export const modifyRecipe = (req, res) => {
  const reqBody = req.body;
  delete reqBody.userId;
  Recipe.update(
    reqBody,
    { where: { id: req.params.recipeId },
      returning: true,
    }).then((recipes) => {
    res.status(200).json({ recipe: recipes[1][0],
      message: 'Your recipe has been updated'
    });
  });
};

export const deleteRecipe = (req, res) => {
  Recipe.destroy({
    where: {
      id: req.params.recipeId
    },
  })
    .then((recipe, err) => {
      if (err) {
        res.status(400).json({ message: 'error sending your request' });
      } else {
        res.status(204).json({ message: 'recipe deleted successfully' });
      }
    });
};
