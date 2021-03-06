'use strict'

function EntryAlreadyExistsError (message) {
  this.name = 'EntryAlreadyExistsError'
  this.message = message
}

EntryAlreadyExistsError.prototype = Object.create(Error.prototype)
EntryAlreadyExistsError.prototype.constructor = EntryAlreadyExistsError
EntryAlreadyExistsError.prototype.toString = function () {
  return this.message
}

EntryAlreadyExistsError.is = err => err instanceof Error && err.name === EntryAlreadyExistsError.name

module.exports = EntryAlreadyExistsError
