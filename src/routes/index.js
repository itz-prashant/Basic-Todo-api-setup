const express = require('express')
const v1router = require('./v1/index')
const v2router = require('./v2/index')

const router = express.Router()

router.use('/v1', v1router)

router.use('/v2', v2router)

module.exports = router