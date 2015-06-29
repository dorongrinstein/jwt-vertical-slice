__dorongrinstein-jwt-verifier__ is a small library that helps decode and verify JWTs which are Base64Url encoded.

__IMPORTANT:__ This library is meant for demonstration purpose only in the context of an architecture paper. It should not be used for production. 

## Installation

npm install dorongrinstein-jwt-verifier [--save]

## Usage

~~~javascript
var token = 'jwt token base64 string goes here';

var jwtVerifier = new (require('dorongrinstein-jwt-verifier'))();
jwtVerifier.verify(token, function(decoded) {
  console.log(decoded);
}

~~~~~

## Author

[~dorongrinstein](concur.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.
