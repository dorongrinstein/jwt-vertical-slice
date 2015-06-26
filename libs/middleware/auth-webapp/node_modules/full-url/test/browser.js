var run = require('tape').test
var full = require('../browser')
var root = (location.origin ?
  location.origin :
  location.protocol + '//' + location.host
)

run('it actually works', function(test) {
  var file = '/it/actually/works.dell'
  var query = '/search?q=computer&page=2#cheap'

  test.plan(2)

  test.equal(
    full(file),
    root + file,
    'with files'
  )

  test.equal(
    full(query),
    root + query,
    'and query strings/hashes'
  )
})
