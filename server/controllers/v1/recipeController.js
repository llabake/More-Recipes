import { Recipe, Vote, FavoriteRecipe, Review } from './../../models';

export const fetchRecipe = recipeId => Recipe.findOne({
  where: {
    id: recipeId
  }
});

export const addRecipe = (req, res) => {
  Recipe.create({
    title: req.body.title,
    image: req.body.image,
    direction: req.body.direction,
    ingredients: req.body.ingredients,
    category: req.body.category,
    userId: req.user.id
  })
    .then(recipe => res.status(201).json({ recipe,
      message: 'Your recipe has been added' }))
    .catch((error) => {
      res.status(400).json({ error });
    });
};

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

export const findARecipe = (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.recipeId
    },
  })
    .then((recipe, err) => {
      if (err) {
        res.status(400).json({ message: 'error sending your request', err });
      } else {
        res.status(200).json({ recipe });
      }
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
        res.status(200).json({ message: 'recipe deleted successfully' });
      }
    });
};

export const getAllRecipes = (req, res) => {
  const queryOptions = {};
  if (req.query.sort === 'upvotes' && req.query.order === 'ascending') {
    queryOptions.order = [['upvotes', 'ASC']];
  }
  Recipe.findAll(queryOptions)
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
    fetchRecipe(req.params.recipeId).then((recipe, err) => {
      if (err) {
        res.status(400).json({ message: 'error sending your request', err });
      } else if (vote) {
        if (vote.type === req.body.type) {
          res.status(201).json({ vote,
            message: 'vote updated successfully',
            recipe });
        } else {
          vote.update({ type: req.body.type })
            .then((updatedVote) => {
              let fieldToIncrement;
              let fieldToDecrement;
              if (req.body.type === 'upvote') {
                fieldToIncrement = 'upVotes';
                fieldToDecrement = 'downVotes';
              } else if (req.body.type === 'downvote') {
                fieldToIncrement = 'downVotes';
                fieldToDecrement = 'upVotes';
              }
              recipe.increment(fieldToIncrement).then(() => {
                recipe.decrement(fieldToDecrement).then(() => {
                  recipe.reload().then((reloadedRecipe) => {
                    res.status(201).json({ vote: updatedVote,
                      message: 'vote created successfully',
                      recipe: reloadedRecipe,
                    });
                  }).catch(err => res.status(400).json({
                    message: 'error sending your request', err }));
                });
              });
            });
        }
      } else {
        Vote.create({
          type: req.body.type,
          userId: req.user.id,
          recipeId: req.params.recipeId
        }).then((newVote) => {
          let fieldToIncrement;
          if (req.body.type === 'upvote') {
            fieldToIncrement = 'upVotes';
          } else if (req.body.type === 'downvote') {
            fieldToIncrement = 'downVotes';
          }
          recipe.increment(fieldToIncrement).then(() => {
            recipe.reload().then((fetchedRecipe) => {
              res.status(201).json({ vote: newVote,
                message: 'vote created successfully',
                recipe: fetchedRecipe,
              });
            }).catch(err => res.status(400).json({
              message: 'error sending your request', err }));
          });
        }).catch(err => res.status(400).json({
          message: 'error sending your request', err }));
      }
    });
  });
};

export const addRecipeAsFavorite = (req, res) => {
  FavoriteRecipe.create({
    userId: req.user.id,
    recipeId: req.params.recipeId
  })
    .then(favoriteRecipe => res.status(201).json({ favoriteRecipe,
      message: 'Recipe has been favorited' }))
    .catch((error) => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({ message: 'Recipe has already been favorited' });
      } else {
        res.status(400).json({ error });
      }
    });
};

export const getFavoriteRecipes = (req, res) => {
  FavoriteRecipe.findAll({
    where: {
      userId: req.user.id
    },
  })
    .then((favoriteRecipes, err) => {
      if (err) {
        res.status(400).json({ message: 'error sending your request', err });
      } else {
        return res.status(200).json({ favoriteRecipes });
      }
    });
};

export const postReview = (req, res) => {
  Review.create({
    reviewText: req.body.reviewText,
    userId: req.user.id,
    recipeId: req.params.recipeId
  })
    .then((review, err) => {
      if (err) {
        res.status(400).json({ message: 'error sending your request', err });
      } else {
        return res.status(200).json({ review });
      }
    });
};

