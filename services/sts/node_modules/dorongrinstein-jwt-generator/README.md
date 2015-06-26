__dorongrinstein-jwt-generator__ is a small library that generates JWTs which are Base64Url encoded.

__IMPORTANT:__ This library is meant for demonstration purpose only in the context of an architecture paper. It should not be used for production. 

## Installation

npm install dorongrinstein-jwt-generator [--save]

## Usage

~~~javascript
// make sure you have a private key *.pem file 
// note that in lieu of a file name, you can provide the UTF-8 encoded private key string
// to the constructor below. It accets either a file name or a string

var jwtGenerator = new (require('dorongrinstein-jwt-generator'))('./private_key.pem');
var token = jwtGenerator.make();
console.log(token); // you've got a token buddy, enjoy..


~~~~~

## Author

[doron.grinstein@concur.com](concur.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.
