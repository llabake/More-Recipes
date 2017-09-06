require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_TEST,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    params: {
      logging: false,
      define: {
        underscored: true
      }
    },
    jwtSecret: 'more_recipes_test'

  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
};

