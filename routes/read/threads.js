const Threads = require(_base + 'models/thread'),
      Replies = require(_base + "models/reply");

module.exports = {
    '/read/threads': {
	methods: ['get'],
	fn: function(req, res, next) {
	    let letter = req.query.letter,
		numReplies = 0;
	    Threads.find({ boardId: letter }, function(err, results) {
		if(err) {
		    return next(err);
		} else {
		    for(let i=0; i<results.length; i++) {
			numReplies = 0;
			Replies.find({ threadId: results[i]._id }, function(err, threadResults) {
			    if(err) {
				return next(err);
			    } else {
				numReplies = threadResults.length;
				console.log(numReplies);
			    }
			});
			console.log(numReplies);
			results[i].numReplies = numReplies;
		    }
		    res.json({ result: results });
		}
	    });
	}
    }
};
