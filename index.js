var url = require('url')

module.exports = function redact(urlString){
  var parts = url.parse(urlString)

  if (parts.auth) {
    var auth = parts.auth.split(':')
    if(auth[1] && auth[1].length > 0){
      auth[1] = '****'
    }
    parts.auth = auth.join(':')
  }

  return url.format(parts)
}
