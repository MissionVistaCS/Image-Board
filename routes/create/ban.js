const Ban = require(_base + 'models/ban');

module.exports = {
	'/create/ban': {
		methods: ['post'],
		fn: function(req, res, next) {
			let ip = req.body.ip,
			    message = req.body.message;

			Ban.findOne({ ip: ip }, function(err, result) {
				if(err) {
					return next(err);
				} 

				if(result) {
					return next(new Error('Ban with this id already exists!'));
				}

				let ban = new Ban({ ip: ip, message: message });
				ban.save(function(err) {
					if(err) {
						return next(err);
					}
				    res.json({ message: message, ip: ip});
				});

			});
		}
	}
	
}
