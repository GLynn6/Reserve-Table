// const {Sequelize} = require("sequelize")


// const sequelize = new Sequelize({
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DATABASE,
//     dialect: "mysql",
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST
// })

// module.exports = sequelize

module.exports = {
    development: {
      username: 'root',
      password: '',
      database: 'tabel',
      host: 'localhost',
      dialect: 'mysql',
    },
    production: {
      username: process.env.RAILWAY_DATABASE_USERNAME,
      password: process.env.RAILWAY_DATABASE_PASSWORD,
      database: process.env.RAILWAY_DATABASE_DB,
      host: process.env.RAILWAY_DATABASE_HOST,
      dialect: 'mysql',
    },
  };