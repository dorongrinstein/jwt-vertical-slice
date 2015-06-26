# full-url
full-url is a function that returns the full URL of a request, including the scheme and host.

[![Build status](https://travis-ci.org/michaelrhodes/full-url.png?branch=master)](https://travis-ci.org/michaelrhodes/full-url)

[![Browser support](https://ci.testling.com/michaelrhodes/full-url.png)](https://ci.testling.com/michaelrhodes/full-url)

## Install

```
npm install full-url
```

### Example
#### node
``` js
var server = require('http').createServer
var url = require('full-url')

server(function(request, response) {
  url(request)
  // => http://localhost:1234/[wherever]
  
  response.end()
}).listen(1234)
```

#### browser(ify)
``` js
var url = require('full-url')
var path = '[wherever]' || '/path/to/resource'

url(path)
// => http://whenev.er/[wherever]
```

### License
[MIT](http://opensource.org/licenses/MIT)
