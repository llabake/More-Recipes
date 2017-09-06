module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addConstraint('FavoriteRecipes', ['userId', 'recipeId'], {
      type: 'unique',
      name: 'favorite_userId_recipeId_unique'
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint('FavoriteRecipes',
      'favorite_userId_recipeId_unique');
  }
};
