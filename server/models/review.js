const reviewModel = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reviewText: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [1, 1000],
          msg: 'Minimum of 1 character and Maximum of 1000 characters required'
        }
      }
    }
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        Review.belongsTo(models.Recipe, {
          foreignKey: 'recipeId'
        });
        Review.belongsTo(models.User, {
          foreignKey: 'userId'
        });
      }
    }
  });
  return Review;
};

export default reviewModel;
