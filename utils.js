// import libphonenumber-js library
// https://github.com/catamphetamine/libphonenumber-js
var custom = require('libphonenumber-js/custom');
var metadata = require('libphonenumber-js/metadata.min.json');

exports.parse = function parse() {
  var parameters = Array.prototype.slice.call(arguments)
  parameters.push(metadata)
  return custom.parse.apply(this, parameters)
}

exports.format = function format() {
  var parameters = Array.prototype.slice.call(arguments)
  parameters.push(metadata)
  return custom.format.apply(this, parameters)
}

exports.isValidNumber = function isValidNumber() {
  var parameters = Array.prototype.slice.call(arguments)
  parameters.push(metadata)
  return custom.isValidNumber.apply(this, parameters)
}

exports.getNumberType = function isValidNumber() {
  var parameters = Array.prototype.slice.call(arguments)
  parameters.push(metadata)
  return custom.getNumberType.apply(this, parameters)
}

exports.AsYouType = function AsYouType(country) {
  custom.AsYouType.call(this, country, metadata)
}

exports.AsYouType.prototype = Object.create(custom.AsYouType.prototype, {})
exports.AsYouType.prototype.constructor = exports.AsYouType
