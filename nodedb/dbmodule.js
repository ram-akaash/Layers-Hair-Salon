var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");

exports.authenticateUser = function(email, password1, response) {
db.users.find({ "email": email,"password1": password1 },
	function(err, users)
	{
		if (err || !users) {
		response.write("Not authorized user");
		response.end();
            }
		else if (users.length == 0) {
		response.write("Not authorized user");
		response.end();
            }
		else {
		response.write("Authorized user");
		response.end();
            }
        });
}

exports.saveUser = function(name, email, mobile, password1, password2, response) {
console.log('Saving user to mongo');
db.users.insert({ "name": name, "email": email ,"mobile": mobile,"password1": password1, "password2":password2},
function(err, saved)
{
	if (err || !saved)
		console.log(err);
	else
		response.write("User Saved");
		response.end();
         });
}
exports.saveBooking = function(name, email, mobile,gender, response) {
console.log('Saving user to mongo');
db.book.insert({ "name": name, "email": email ,"mobile": mobile,"gender": gender},
function(err, saved)
{
	if (err || !saved)
		console.log(err);
	else
		response.write("User Saved");
		response.end();
         });
}
