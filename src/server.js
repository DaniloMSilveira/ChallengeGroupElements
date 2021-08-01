const express = require('express')
require('express-async-errors')
const routes = require('./routes')

const AppError = require('./errors/AppError')

const server = express()
server.use(express.json())
server.use(routes)

// Configurando retornos de erros
server.use((err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'error',
      type: err.type,
      message: err.message
    })
  } else {
    res.status(500).json({
      status: 'error',
      error: 'Internal server error',
      message: `Internal server error ${err.message}`
    })
  }
})

module.exports = server
