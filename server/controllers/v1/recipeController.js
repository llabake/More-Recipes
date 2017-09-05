import { Recipe, Vote } from './../../models';

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

export const getAllRecipes = (req, res) => {
  Recipe.findAll({})
    .then((recipes, err) => {
      if (err) {
        res.status(400).json({ message: 'error sending your request', err });
      } else {
        res.status(200).json({ recipes });
      }
    });
};

export const voteRecipe = (req, res) => {
  Vote.findOne({
    where: {
      userId: req.user.id,
      recipeId: req.params.recipeId
    }
  }).then((vote, err) => {
    if (err) {
      res.status(400).json({ message: 'error sending your request', err });
    } else if (vote) {
      vote.update({ type: req.body.type })
        .then((updatedVote) => {
          res.status(201).json({ vote: updatedVote,
            message: 'vote created successfully'
          });
        }).catch(err => res.status(400).json({
          message: 'error sending your request', err }));
    } else {
      Vote.create({
        type: req.body.type,
        userId: req.user.id,
        recipeId: req.params.recipeId
      }).then((newVote) => {
        res.status(201).json({ vote: newVote,
          message: 'vote created successfully'
        });
      }).catch(err => res.status(400).json({
        message: 'error sending your request', err }));
    }
  });
};
