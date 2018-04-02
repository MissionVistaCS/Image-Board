const Ban = require(_base + 'models/ban');

module.exports = {
	'/create/ban': {
		methods: ['post'],
		fn: function(req, res, next) {
			let ip = req.body.ip,
				time = req.body.time,
				message = req.body.message,
				_id = req.body._id;

			Ban.findOne({ _id: _id }, function(err, result) {
				if(err) {
					return next(err);
				} 

				if(result) {
					return next(new Error('Ban with this id already exists!'));
				}

				let ban = new Ban({ ip: ip, time: time,
									_id: _id, message: message });
				ban.save(function(err) {
					if(err) {
						return next(err);
					}
					res.json({ _id: _id, message: message, time: time, ip: ip});
				});

			});
		}
	}
	
}