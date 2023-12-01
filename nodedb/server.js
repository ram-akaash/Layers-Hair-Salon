var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var name = querystring.parse(data1)["name"];
console.log(name);
var email = querystring.parse(data1)["email"];
console.log(email);
var mobile = querystring.parse(data1)["mobile"];
console.log(mobile);
var password1 = querystring.parse(data1)["password1"];
console.log(password1);
var password2 = querystring.parse(data1)["password2"];
console.log(password2);
var gender = querystring.parse(data1)["gender"];
console.log(gender);

if (request.url === '/login') {
module.authenticateUser(email, password1, response);
            }
else if (request.url === '/save') {
module.saveUser(name, email, mobile, password1, password2, response);
            }
else if (request.url === '/savebook') {
module.saveBooking(name, email, mobile, gender, response);
            }
});

}).listen(3600);
console.log("Server started");
