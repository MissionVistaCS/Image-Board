const Ban = require(_base + 'models/ban');

module.exports = function(req, res, next) {
	Ban.findOne({ ip: req.connection.remoteAddress }, function(err, result) {
	    if (err) {
		next(err);
	    }

	    if (result) {
		next(new Error('User is banned!'));
	    }

	    next();
	});
}
