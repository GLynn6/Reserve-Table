const express = require("express")
const router = express.Router()

const tabelRouter = require('./tabel.router')

router.use("/", tabelRouter)

module.exports = router
