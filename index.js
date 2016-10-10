var url = require('url')

module.exports = function redact(urlString){
  var parts = url.parse(urlString)
  var auth = null

  if(parts.auth) {
    auth = parts.auth.split(':')
  }

  if(auth && auth[1] && auth[1].length > 0){
    auth[1] = '****'
    parts.auth = auth.join(':')
  }
  
  return url.format(parts)
}