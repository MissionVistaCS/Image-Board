const Ban = require(_base + 'models/ban');

module.exports = {
    '/update/ban': {
	methods: ['put'],
	middleware: [],
	fn: function(req, res, next) {
	    const banId = req.body.id;

	    let updateFields = {};
	    if(req.body.ip !== undefined) {
		updateFields.ip = req.body.ip;
	    }
	    if(req.body.time !== undefined) {
		updateFields.time = req.body.time;
	    }
	    
	    Ban.findOneAndUpdate({ _id: banId }, updateFields, function(err, result) {
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
