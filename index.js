const url = require('url')

module.exports = function redact(urlString){
  const parts = url.parse(urlString)

  if (parts.auth) {
    const auth = parts.auth.split(':')
    if(auth[1] && auth[1].length > 0){
      auth[1] = '****'
    }
    parts.auth = auth.join(':')
  }

  return url.format(parts)
}
