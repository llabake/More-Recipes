module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addConstraint('Votes', ['userId', 'recipeId'], {
      type: 'unique',
      name: 'vote_userId_recipe_Id_unique'
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint('Votes',
      'vote_userId_recipe_Id_unique');
  }
};
