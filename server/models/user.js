

const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [[3, 25]],
          msg: 'Minimum of 3 character and Maximum of 25 characters required'
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
          args: [[3, 25]],
          msg: 'Minimum of 3 character and Maximum of 25 characters required'
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [[3, 25]],
          msg: 'Minimum of 3 character and Maximum of 25 characters required'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [[3, 25]],
          msg: 'Minimum of 3 character and Maximum of 25 characters required'
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
        User.hasMany(models.Review, {
          foreignKey: 'userId',
          as: 'reviews'
        });
      }
    }
  });
  return User;
};

export default userModel;