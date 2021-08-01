
const AppError = require('./AppError')

class TypeInvalidError extends AppError {
  constructor (paramName, typeCorrect) {
    super('TypeInvalidError', `Type for param "${paramName}" is invalid. Expect type: ${typeCorrect}`)
  }
}

module.exports = TypeInvalidError
