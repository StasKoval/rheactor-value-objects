'use strict'

function TokenExpiredError (token) {
  this.name = 'TokenExpiredError'
  this.message = 'The token expired'
  this.token = token
}

TokenExpiredError.prototype = Object.create(Error.prototype)
TokenExpiredError.prototype.constructor = TokenExpiredError
TokenExpiredError.prototype.toString = function () {
  return this.message
}

TokenExpiredError.is = err => err instanceof Error && err.name === TokenExpiredError.name

module.exports = TokenExpiredError
