const assert = require('assert')
const redactor = require('./')

assert.equal(
  redactor('https://james:password@localhost.com:4345/yeah'),
  'https://james:****@localhost.com:4345/yeah'
)

assert.equal(
  redactor('https://localhost.com:4345/yeah'),
  'https://localhost.com:4345/yeah'
)
