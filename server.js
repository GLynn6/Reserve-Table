const express = require("express")
require('dotenv').config()
const { Sequelize } = require('sequelize');
const config = require("./config/config")
const server = express()




const allRouter = require("./routes")

const PORT = process.env.PORT || 8080
server.use(express.urlencoded({extended: true}))


server.use(express.json())
server.use(allRouter)
server.use("", (req, res) =>{
    res.send("Server dijalankan")
})

const sequelize = new Sequelize({
    dialect: 'mysql', // Menyediakan dialek MySQL
    host: process.env.RAILWAY_DATABASE_HOST,
    port: process.env.RAILWAY_DATABASE_PORT,
    username: process.env.RAILWAY_DATABASE_USERNAME,
    password: process.env.RAILWAY_DATABASE_PASSWORD,
    database: process.env.RAILWAY_DATABASE_DB,
  });

server.listen(PORT, () =>{
    console.log("server running on port", PORT);
})

// const sequelize = new Sequelize(config[process.env.NODE_ENV]);

// // Tes koneksi ke database
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Koneksi ke database berhasil.');
//   })
//   .catch((error) => {
//     console.error('Koneksi ke database gagal:', error);
//   });