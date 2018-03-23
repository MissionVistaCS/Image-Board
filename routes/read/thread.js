const Threads = require(_base + "models/thread");

module.exports = {
	'/read/thread': {
		methods: ['get'],
		fn: function(req, res, next) {
			let letter = req.query.letter;
			//post id, name, content, pinned, time
			Threads.findOne({letter: letter}, function(err, result) {
				if(err) {
					return next(err);
				} else {
					res.json({ result: { id: result.id, letter: letter, name: result.name,
							  content: result.content, pinned: result.pinned,
							  time: result.time } });
				}
			});
		}
	}
}
