const router = require("express").Router()
const propositionRouter = require('./proposition.router')

router.use('/proposition', propositionRouter)

module.exports = router