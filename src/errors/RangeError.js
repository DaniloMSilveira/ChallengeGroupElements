
const AppError = require('./AppError')

class RangeError extends AppError {
  constructor (paramName, range) {
    super('RangeError', `For param "${paramName}" expect a number between ${range}`)
  }
}

module.exports = RangeError
