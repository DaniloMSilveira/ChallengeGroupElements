
const AppError = require('./AppError')

class LengthElementsError extends AppError {
  constructor (paramName, lengthInvalid, lengthExpect) {
    super('LengthElementsError', `For param "${paramName}" expect only ${lengthExpect} elements in array but received ${lengthInvalid} elements`)
  }
}

module.exports = LengthElementsError
