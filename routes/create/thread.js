const Thread = require(_base + 'models/thread');

module.exports = {
	'/create/thread' : {
		methods: ['post'],
		fn: function (req, res, next) {
			let name = req.body.name,
				board = req.body.board,
				attachments = req.body.attachments;
			Thread.findOne({name: name}, function(err, result) {
				if(err) {
					console.log("Error!");
				} else if(result) {
					console.log("Thread Already Exists!");
				} else {
					let thread = new Thread({name: name, board: board, 
						attachments: attachments});
					thread.save(function(err) {
						if(err) {
							console.log("Error!");
						} else {
							res.json({result: "Success!"});
						}
					});
				}
			});
		}
	}
}