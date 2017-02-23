var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config.js');

function createUserToken(user){
	var timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}


exports.signin = function(req, res, next){
	//user has already had their email & pw authd
	//we just need to give them a token
	res.send({ token: createUserToken(req.user) });	
}


exports.signup = function(req, res, next){
	var email = req.body.email;
	var password = req.body.password;

		if( !email || !password){
			return res.status(418).send({error: 'You must provide email and password'});
		}

	//2
	User.findOne({ email: email }, function(err, existingUser){
		if(err) {
			return next(err);
		} 

		if(existingUser){
			return res.status(418).send(err);
		}

		var user = new User({
			email: email,
			password: password
		});

		user.save(function(err){
			if(err) { return next(err); }
			res.json({ token: createUserToken(user)});
		});
	});
}
