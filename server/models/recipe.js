module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 25],
          msg: 'Minimum of 1 character and Maximum of 50 characters required'
        }
      }
    },
    direction: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [1, 1000],
          msg: 'Minimum of 1 character and Maximum of 1000 characters required'
        }
      }
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [1, 500],
          msg: 'Minimum of 1 character and Maximum of 500 characters required'
        }
      }
    },
    image: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        Recipe.belongsTo(models.User, {
          foreignKey: 'userId'
        });
      }
    }
  });
  return Recipe;
};
