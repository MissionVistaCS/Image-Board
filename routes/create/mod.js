const Mod = require(_base + "models/mod");

module.exports = {
	'/create/mod': {
		methods: ['post'],
		fn: function(req, res, next) {
			let username = req.body.username,
				password = req.body.password;
			Mod.findOne({ username: username }, function(err, result) {
				if (err) {
					return next(err);
				} 
				if (result) {
					return next(new Mod("Mod with that email already exists"));
				} 

				let mod = new Mod({
					username: username,
					password: password 
				});

				mod.save(function(err) {
					if(err) {
						return next(err);
					}
					res.json({ result: { username: username } });
				});
			});
		}
	}
}