# node-url-auth-redactor
Redacts the auth:password part of url strings


## Usage

```js
const redactor = require('url-auth-redactor')
const url = 'https://user:password@example.com'

const redactedUrl = redactor(url)
// 'https://user:****@example.com'