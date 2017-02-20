module.exports = function(app){

	var Auth = require('./controllers/auth');
	var passportService = require('./services/passport');
	var passport = require('passport');

	// var User = require('./models/user');

var requireAuth = passport.authenticate('jwt', { session: false });

	app.get('/', requireAuth, function(req, res){
			res.send("HELLOOOOOO HOMEPAGE");
			//res.send({hi: 'there'});
	});

	app.post('/signup', Auth.signup);
}

