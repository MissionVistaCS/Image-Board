const Reply = require(_base + 'models/reply');

module.exports = {
	'/create/reply': {
		methods: ['post'],
		fn: function(req, res, next) {
			let postId = req.body.id,
				content = req.body.content,
				attachment = req.body.attachment,
				time = req.body.time,
				ip = req.body.ip;

			Reply.findOne({ id: postId }, function(err, result) {
				if(err) {
					return next(err);
				}

				if(result) {
					return next(new Error("Reply with this id already exists"));
				} 

				let reply = new Reply({ id: postId, 
									content: content, 
									attachment: attachment,
									time: time,
									ip: ip });
				reply.save(function(err) {
					if(err) {
						return next(err);
					}
					res.json({ id: postId, ip: ip});
				});
 			});
			
		}
	}
}