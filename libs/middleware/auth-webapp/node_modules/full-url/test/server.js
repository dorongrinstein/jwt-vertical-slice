var run = require('tape').test
var server = require('http').createServer
var request = require('request')
var full = require('../')
var port = 25825
var root = 'http://localhost:' + port

var noop = server(function(req, res) {
  res.end(full(req))  
})

noop.listen(port)

run('it actually works', function(test) {
  var file = root + '/it/actually/works.dell'
  var query = root + '/search?q=computer&page=2#cheap'

  request(file, function(error, res, body) {
    test.equal(body, file, 'with files')

    request(query, function(error, res, body) {
      test.equal(body, query.replace(/#.+/, ''), 'and query strings')
      test.not(body, query, 'but not with hashes')
      test.end()
      noop.close()
    })
  })
})
