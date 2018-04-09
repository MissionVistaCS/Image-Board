const Mod = require(_base + 'models/mod.js'),
      ensureAuthenticity = require(_base + 'middleware/ensureAuthenticity');

module.exports = {
	'/update/mod': {
		methods: ['put'],
		middleware: [],
		fn: function(req, res, next) {
			
			let updateFields = {};
			const _id = req.body._id;

			if(req.body.email) {
				updateFields.email = req.body.email;
			}

			if(req.body.password) {
				updateFields.password = req.body.password;
			}

			Mod.findOneAndUpdate({ _id: _id }, updateFields, function(err, result) {
				if(err) {
					return next(err);
				} 

				res.json({ result: result });
			});
		}
	}

}
