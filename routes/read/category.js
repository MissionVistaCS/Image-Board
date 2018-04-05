const Category = (_base + "models/category.js");

modules.export = {
	"/read/category": {
		methods: ['get'],
		fn: function(req, res, next) {
			let name = req.query.name;
			
			Category.findOne({ name: name }, function(err, result) {
				if(err)
					return next(err);
				
				res.json({ result: { name: name }});
			});

		}
	}
}
