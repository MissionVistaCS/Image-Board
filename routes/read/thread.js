const Threads = require(_base + "models/thread");

module.exports = {
	'/read/thread': {
		methods: ['get'],
		fn: function(req, res, next) {
			let letter = req.query.letter;
			//post id, name, content, pinned, time
			Threads.findOne({letter: letter}, function(err, results) {
				if(err) {
					console.log("Error!");
				} else {
					res.json({id: req.query.id, name: req.query.name, 
							  content: req.query.content, pinned: req.query.pinned,
							  time: req.query.time});
				}
			});
		}
	}
}