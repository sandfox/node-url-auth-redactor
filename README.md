# node-url-auth-redactor
Redacts the auth:password part of url strings


## Usage

```
var redactor = require('url-auth-redactor')
var url = 'https://user:password@example.com'

var redactedUrl = redactor(url)
// 'https://user:****@example.com'