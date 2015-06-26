var strip = function(string, pattern) {
  return string.replace(pattern, '') 
}

module.exports = function(pathname) {
  var origin = (location.origin ?
    location.origin :
    location.protocol + '//' + location.host
  )

  var url = [
    strip(origin, /\/$/),
    strip(pathname, /^\//)
  ]

  return url.join('/')
}
