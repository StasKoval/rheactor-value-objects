'use strict'

const Joi = require('joi')
const ValidationFailedException = require('./errors').ValidationFailedException

/**
 * @param {String} uri
 * @constructor
 * @throws ValidationFailedException if the creation fails due to invalid data
 */
function URIValue (uri) {
  if (!URIValue.is(uri)) {
    throw new ValidationFailedException('Not an URI: ' + uri, {uri})
  }
  this.uri = uri
}

URIValue.prototype.toString = function () {
  return this.uri
}

URIValue.is = (uri) => {
  let r = Joi.validate(uri, Joi.string().uri({scheme: ['https', 'http']}).lowercase().required())
  return !r.error
}

module.exports = URIValue
