const Board = require(_base + 'models/board');

//will need mod authentication
module.exports = {
	'/create/board': {
		methods: ['post'],
		fn: function(req, res, next) {
			let category = req.body.category,
				name = req.body.name,
				letter = req.body.letter,
				favicon = req.body.favicon;
			Board.findOne({ letter: letter }, function(err, result) {
				if(err) {
					return next(err);
				}

				if(result) {
					return next(new Error("Board with that name already exists!"));
				}

				let board = new Board({ categoryName: category,
										name: name, 
										letter: letter,
										favicon: favicon });
				board.save(function(err) {
					if(err) {
						return next(err);
					}
				    res.json({ result: { letter: letter,
							 category: category,
							 name: name }});
				});

			});
		}
	}
}
