const Boards = require(_base + 'models/board');

module.exports = {
	'/read/board' : {
		methods : ['get'],
		fn: function(req, res, next) {
			let letter = req.query.letter;

			Boards.findOne({ letter: letter }, function (err, result) {
				if(err) {
					return next(err);
				}
				else if (!result) {
					return next(new Error('Board not found.'));
				}

				res.json({ result: { name: result.name, favicon: result.favicon } });
			});
		}
	}
};