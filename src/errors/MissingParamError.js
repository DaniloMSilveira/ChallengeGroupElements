
const AppError = require('./AppError')

class MissingParamError extends AppError {
  constructor (paramName) {
    super('MissingParamError', `Missing param: ${paramName}`)
  }
}

module.exports = MissingParamError
