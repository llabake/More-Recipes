const favoriteRecipeModel = (sequelize, DataTypes) => {
  const FavoriteRecipe = sequelize.define('FavoriteRecipe', {
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
        // associations can be defined here
        FavoriteRecipe.belongsTo(models.Recipe, {
          foreignKey: 'recipeId'
        });
        FavoriteRecipe.belongsTo(models.User, {
          foreignKey: 'userId'
        });
      }
    }
  });
  return FavoriteRecipe;
};

export default favoriteRecipeModel;
