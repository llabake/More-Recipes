

module.exports = {
  up(queryInterface, Sequelize) {
    queryInterface.addColumn('Recipes', 'upVotes', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    });
    queryInterface.addColumn('Recipes', 'downVotes', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    });
    queryInterface.addColumn('Recipes', 'category', {
      type: Sequelize.STRING,
      defaultValue: ''
    });
    queryInterface.addColumn('Recipes', 'views', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    });
  },

  down(queryInterface, Sequelize) {
    queryInterface.removeColumn('Recipes', 'upVotes');
    queryInterface.removeColumn('Recipes', 'downVotes');
    queryInterface.removeColumn('Recipes', 'category');
    queryInterface.removeColumn('Recipes', 'views');

  }
};
