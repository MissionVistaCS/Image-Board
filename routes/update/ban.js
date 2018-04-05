const Ban = require(_base + 'models/ban');

module.exports = {
    '/update/ban': {
	methods: ['put'],
	middleware: [],
	fn: function(req, res, next) {
	    const banId = req.body.id;

	    let updateFields = {};
	    ip = req.body.ip;

	    if(req.body.time !== undefined) {
		updateFields.time = req.body.time;
	    }

	    if(req.body.message !== undefined) {
		updateFields.message = req.body.message;
	    }
	    
	    Ban.findOneAndUpdate({ ip: ip }, updateFields, function(err, result) {
		if(err) {
		    return next(err);
		}

		if(result) {
		    res.json({ result: result });
		}
	    });
	}
    }
}
