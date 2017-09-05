module.exports =  (sequelize, DataTypes) => {
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
      associate() {
        // associations can be defined here
      }
    }
  });
  return FavoriteRecipe;
};
