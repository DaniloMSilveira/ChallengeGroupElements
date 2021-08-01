const { Router } = require('express')

const ChallengeController = require('./controllers/ChallengeController')

const routes = new Router()

routes.post('/challenge', new ChallengeController().execute)

module.exports = routes
