const Boards = require(_base + 'models/board');

module.exports = {
	'/read/board' : {
		methods : ['get'],
		fn: function(req, res, next) {
			let letter = req.query.letter;

			Boards.findOne({letter: letter}, function(err, results) {
				if(err) {
					console.log("Error!");
				} else {
				        res.json({ name: results.name, favicon: results.favicon });
				}
			});
		}
	}
}
