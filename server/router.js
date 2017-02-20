module.exports = function(app){

	app.get('/', function(req, res, next){
			res.send("HELLOOOOOO HOMEPAGE");
	});

	app.get('/signup', function(req, res, next){
		res.send("Thank you for signing up!");
	});
}