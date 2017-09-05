module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['upvote', 'downvote']],
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate(models) {
        Vote.belongsTo(models.Recipe, {
          foreignKey: 'recipeId'
        });
        Vote.belongsTo(models.User, {
          foreignKey: 'userId'
        });
      }
    }
  });
  return Vote;
};
