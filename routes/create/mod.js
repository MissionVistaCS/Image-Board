const Mod = require(_base + "models/mod");

module.exports = {
	'/create/mod': {
		methods: ['post'],
		fn: function(req, res, next) {
			let email = req.body.email,
				password = req.body.passowrd;
			Mod.findOne({ email: email }, function(err, result) {
				if (err) {
					return next(err);
				} 
				if (result) {
					return next(new Mod("Mod with that email already exists"));
				} 

				let mod = new Mod({ 
					email: email, 
					password: password 
				});

				mod.save(function(err) {
					if(err) {
						return next(err);
					}
				});

				res.json({ result: { email: email } });
			});
		}
	}
}