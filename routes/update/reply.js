const Reply = require(_base + 'models/reply.js');

module.exports = {
	'/update/reply': {
		methods: ['put'],
		fn: function(req, res, next) {
			//TODO: add update for attachments
			let updateFields = {};
			const id = req.body._id;
			

			if(req.body.content) {
				updateFields.content = req.body.content;
			}

			//if(req.body.attachment) {
			//	updateFields.attachment = req.body.attachment;
			//}
			
			Reply.findOneAndUpdate({ _id: id }, updateFields, function(err, result) {
				if(err) {
					return next(err);
				}

				res.json({ result: result });
			
			}); 
		}
	}
}

