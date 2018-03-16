const auth = require(_base + 'middleware/Authenticate');

module.exports = {
    '/create/category': {
	methods: ['post'],
	middleware: [auth.ensureAuthenticated],
	fn: function(req, res, next) {
	    let category = Categories.findCategory(name);
	    if(category instanceof Error) {
		Category.newCategory({ name: req.body.name }, function(err) {
		if(err) return next(err);
		    res.json({ result: "Success" });
		});
		    
	    }
	}
    }
}
