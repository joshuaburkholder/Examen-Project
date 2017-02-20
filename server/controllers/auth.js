var User = require('../models/user');

exports.signup = function(req, res, next){
	//Test

	//1
	var email = req.body.email;
	var password = req.body.password;

		if( !email || ! password){
			return res.status(418).send({error: 'You must provide email and password'});
		}

	//2
	User.findOne({ email: email }, function(err, existingUser){
		if(err) {
			return next(err);
		} //handle search error

		if(existingUser){
			return res.status(418).send(err);
//alternative: return res.status(418).send("email is in use");

		}//handles existing users

//3
		var user = new User({
			email: email,
			password: password
		});

//To save the record to the DB.
		user.save(function(err){
			if(err) { return next(err); }
//4 respond to a request indicating the user was created	
			res.json({success: true});
		});
	});

	// res.send("authorization is happening, yo");
	// console.log(req.body);

}
