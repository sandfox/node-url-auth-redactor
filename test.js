var assert = require('assert')
var redactor = require('./')

var url = 'https://james:password@localhost.com:4345/yeah'
var expectedRedactedUrl = 'https://james:****@localhost.com:4345/yeah'
var redactedUrl = redactor(url)

assert.equal(redactedUrl, expectedRedactedUrl)