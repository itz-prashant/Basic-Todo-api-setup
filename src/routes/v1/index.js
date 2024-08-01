const express = require('express')
const homePingController = require('../../controllers/home-controller')
const todoRouter = require('./todo-routes')

const router = express.Router()

router.get('/ping', homePingController)

router.use('/todo', todoRouter)

module.exports = router