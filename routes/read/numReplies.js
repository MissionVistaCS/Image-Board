const Replies = require(_base + "models/reply");

module.exports = {
    '/read/numReplies': {
	methods: ['get'],
	fn: function(req, res, next) {
	    let _id = req.query._id, //For thread
		numReplies = 0;
	    Replies.find({ threadId: _id }, function(err, threadResults) {
		if(err) {
		    return next(err);
		} else {
		    numReplies = threadResults.length;
		    res.json( { result: { numReplies: numReplies } } );
		}
	    });
	}
    }
}
