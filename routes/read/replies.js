const Replies = require(_base + 'models/reply');

module.exports = {
	'/read/replies': {
		methods: ['get'],
		fn: function(req, res, next) {
			let threadId = req.query.threadId;	//what's the query

			Replies.find({threadId: threadId}, function(err, results) {
				if(err) {
					console.log('Error!');
					//res.error
				} else {
					res.json({results: results})	//return all replies
				}
			});
		}
	}

}