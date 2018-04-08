const Threads = require(_base + "models/thread");

module.exports = {
	'/read/thread': {
		methods: ['get'],
		fn: function(req, res, next) {
		    let _id = req.query._id;
		    //post id, name, content, pinned, time
		    Threads.findById(_id, function(err, result) {
			if(err) {
			    return next(err);
			} else {
			    res.json({ result: result });
			}
		    });
		}
	}
};
