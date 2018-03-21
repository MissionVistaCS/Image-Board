const Boards = require(_base + 'models/boards');

module.exports = {
	'/read/boards' : {
		methods: ['get'],
		fn: function(req, res, next) {
			//are these necessary?
			let category = req.query.category,
				name = req.query.name,
				letter = req.query.letter,
				favicon = req.query.favicon;

			let boards = Boards.findAll({letter: letter}, function(err, results) {
				if(err) {
					return console.log("error"); //probably wrong sorry
				} else {
					res.json({results: results});	//TODO	
				}
			});
		}
	}
}