var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')
var app = express();
var router = require('./router');
var mongoose = require('mongoose');
var cors = require('cors');

//DB connection
mongoose.connect('mongodb://plevoh:5$IOdkd#MI5q54chuml@ds143980.mlab.com:43980/buckets');

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);


var port = process.env.PORT || 3000;

var server = http.createServer(app);

server.listen(port);
console.log('Server listening on ' + port);
