const Board = require(_base + 'models/board.js');

module.export = {
	'/update/board': {
		methods: ['put'],
		middleware: [],
		fn: function(req, res, next) {

			let updateFields = {};
			const letter = req.body.letter;

			if(req.body.category) {
				updateFields.category = req.body.category;
			}

			if(req.body.name) {
				updateFields.name = req.body.name;
			}

			if(req.body.favicon) {
				updateFields.favicon = req.body.favicon;
			}

			Board.findOneAndUpdate({ letter: letter }, updateFields, function(err, result) {
				if(err)	{
					next(err);
				}

				res.json({ result: result });
			});
		}
	}
}

