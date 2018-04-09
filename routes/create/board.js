const Board = require(_base + 'models/board'),
      ensureAuthenticity = require(_base + 'middleware/ensureAuthenticity');

//will need mod authentication
module.exports = {
	'/create/board': {
	    methods: ['post'],
	    middleware: [ensureAuthenticity],
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
				    res.redirect('/' + letter + '/catalog');
				});

			});
		}
	}
}
