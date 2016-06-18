var path = require('path');

var Article = require('../models/article.js');

module.exports = function(app){
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../../public/index.html'));
	});

	app.get('/articles', function(req, res){
		Article.find({}), function(err, doc){
			if(err){
				console.log(err);
			}else{
				res.json(doc);
			}
		}
	});

	app.get('/articles/:id', function(req, res){
		Article.findOne({'_id': req.params.id})
		.exec(function(err, doc){
			if(err){
				console.log(err);
			}else{
				res.json(doc);
			}
		});
	});
}