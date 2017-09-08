

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [1, 25],
          msg: 'Minimum of 1 character and Maximum of 25 characters required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email supplied. Please supply a valid email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1],
          msg: 'Minimum of 1 character and Maximum of 25 characters required'
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: 'Minimum of 1 character and Maximum of 25 characters required'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: 'Minimum of 1 character and Maximum of 25 characters required'
        }
      }
    },
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Recipes, {
          foreignKey: 'userId',
          as: 'recipes'
        });
      }
    }
  });
  return User;
};
