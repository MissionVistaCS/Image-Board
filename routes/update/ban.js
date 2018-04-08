const Ban = require(_base + 'models/ban'),
      ensureAuthenticity = require(_base + 'middleware/ensureAuthenticity');

module.exports = {
    '/update/ban': {
	methods: ['put'],
	middleware: [],
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
