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
    res.status(400).json(error);
  });

