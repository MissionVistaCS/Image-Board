const auth = require(_base + 'middleware/authenticate');

const Category = require(_base + 'models/category');

module.exports = {
    '/create/category': {
	methods: ['create'],
	middleware: [],
	fn: function(req, res, next) {
	     const name = req.body.name;
	     Category.findOne({name: name}, function (err, result) {
		     if (err) {
			 console.log('Error!!!');
		     } else if (result) {
			 console.log('Already exists!!11!');
		     } else {
			 let cat = new Category({name: name});
			 cat.save(function (err) {
			      if (err) {
				  return console.log("err");
			      } else {
				  res.json({result: "YES!!!!"});
			      }
			 });
		     }
	     });
	}
    }
}
