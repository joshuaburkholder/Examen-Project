module.exports = function(app){

	var Auth = require('./controllers/auth');
	var User = require('./models/user');


	app.get('/', function(req, res, next){
			res.send("HELLOOOOOO HOMEPAGE");
	});

	app.post('/signup', Auth.signup);
}

