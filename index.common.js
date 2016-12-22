'use strict'

exports = module.exports = {}

exports.parse = require('./build/parse').default
exports.format = require('./build/format').default

exports.is_valid_number = require('./build/validate')
exports.isValidNumber   = require('./build/validate')

exports.as_you_type = require('./build/as you type').default
exports.asYouType   = require('./build/as you type').default

exports.metadata = require('./metadata.min')

exports.get_phone_code = require('./build/metadata').get_phone_code
exports.getPhoneCode   = require('./build/metadata').get_phone_code

// exports['default'] = ...