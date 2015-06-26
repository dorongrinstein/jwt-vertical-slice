# jwt-vertical-slice
A simple vertical slice to demonstrate the use of JWTs

This project was created in order to demonstrate the key concept of separation of authentication away from web apps.
Web apps utilize a JWT verification component but they do not themselves deal with authentication. 

The authentication is handled by the security token service (STS).
In this example project, the authentication is as simple as username==doron and password==123. 
The emphasis is on what do you do, post-authentication, not how to do authentication.

The focus is on conveying identity to every serving process.
