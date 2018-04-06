const Ban = require(_base + 'models/ban');

module.exports = {
    '/update/ban': {
	methods: ['put'],
	middleware: [ensureAuthenticity],
	fn: function(req, res, next) {

	    let updateFields = {};
	    const ip = req.body.ip;

	    if(req.body.time) {
		updateFields.time = req.body.time;
	    }

	    if(req.body.message) {
		updateFields.message = req.body.message;
	    }
	    
	    Ban.findOneAndUpdate({ ip: ip }, updateFields, function(err, result) {
		if(err) {
		    return next(err);
		}

		    res.json({ result: result });
	    });
	}
    }
}
