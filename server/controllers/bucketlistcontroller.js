var BucketList = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){
	//For Postman use
	// var title = req.body.title;
	// var topic = req.body.topic;
	// var url = req.body.url;
	// var content = req.body.content;
	// var specificUser = req.user._id;

	var title = req.body.props.title;
	var topic = req.body.props.topic;
	var url = req.body.props.url;
	var content = req.body.props.content;
	var specificUser = req.user._id;

	var bucketlist = new BucketList({
		title: title,
		topic: topic,
		url: url,
		content: content,
		specificUser: specificUser
	});

	bucketlist.save(function(err){
		if(err) { return next(err); }
		res.json(bucketlist);
	});
}

exports.fetchBucketLists = function(req, res){
	var specificUser = req.user._id;
	BucketList.find({specificUser: specificUser})
	.then(
		function fetchSuccess(data){
			res.json(data);
		},
		function fetchError(err){
			res.send(500, err.message);
		}
	);
}
