module.exports = function(request) {
  var secure = request.connection.encrypted
  return 'http' + (secure ? 's' : '') + '://' +
    request.headers.host +
    request.url
}
