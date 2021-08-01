class AppError extends Error {
  constructor (type, message, statusCode = 400) {
    super()
    this.type = type
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = AppError
