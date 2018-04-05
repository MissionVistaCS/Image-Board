const Mod = require(_base + 'models/mod.js');

modules.export = {
	'/update/mod': {
		methods: ['put'],
		middleware: [''],
		fn: function(req, res, next) {
			const _id = req.body._id;
			let updateFields = {};

			if(req.body.email) {
				updateFields.email = req.body.email;
			}
		}
	}

}
