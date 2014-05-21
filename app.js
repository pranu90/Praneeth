
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var loaddb = require('./routes/loaddb');

var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var MongoClient = require('mongodb').MongoClient, format = require('util').format;

//All products page
app.get('/', function(req, res) {
	MongoClient.connect('mongodb://127.0.0.1:27017/project226',  function(err, db) {
		if(err) throw err;
		db.collection('products').find({}).toArray(function(err, docs) {
          res.render( 'index', { products: docs, title: 'All Products' });
          db.close();
        });		
	});	
});

//Product Info page
app.get('/product/:id', function(req, res) {
	MongoClient.connect('mongodb://127.0.0.1:27017/project226',  function(err, db) {
		if(err) throw err;
		var pid = parseInt(req.params.id);
		db.collection('products').findOne({productid : pid}, function(err, docs) {
			if(err) throw err;
		  delete docs._id;
		  delete docs.productid;
          res.render('productpage', { product: docs } );
          db.close();
        });		
	});
});

//Category based page
app.get('/category/:id', function(req, res) {
	MongoClient.connect('mongodb://127.0.0.1:27017/project226',  function(err, db) {
		if(err) throw err;
		var categoryid = decodeURIComponent(req.params.id);
		db.collection('products').find({Category : categoryid}).toArray(function(err, docs) {
			if(err) throw err;
          res.render('index', { products: docs , title: categoryid} );
          db.close();
        });		
	});
});

//load DB page
app.get('/loaddb', loaddb.loaddatabase);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
