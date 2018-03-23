const Thread = require(_base + 'models/thread');

module.exports = {
	'/create/thread' : {
		methods: ['post'],
		fn: function (req, res, next) {
			let name = req.body.name,
				board = req.body.board,
				attachments = req.body.attachments;

			Thread.findOne({ name: name }, function (err, result) {
				if (err) {
					return next(err);
				}

				if (result) {
					return next(new Error('Thread with that name already exists.'));
				}

				let thread = new Thread({ name: name, board: board, attachments: attachments });
				thread.save(function(err) {
					if(err) {
						return next(err);
					}

					res.json({result: "Success!"});
				});
			});
		}
	}
}
