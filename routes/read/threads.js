const Threads = require(_base + 'models/thread');

module.exports = {
	'/read/threads': {
		methods: ['get'],
		fn: function(req, res, next) {
			let letter = req.query.letter;
			Threads.find({ boardId: letter }, function(err, results) {
				if(err) {
					return next(err);
				} else {
					res.json({ result: results });
				}
			});
		}
	}
};