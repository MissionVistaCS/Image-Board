const Reply = require(_base + 'models/reply.js');

module.exports = {
	'/update/reply': {
		methods: ['put'],
		fn: function(req, res, next) {
			let updateFields = {};
			const id = req.body._id;

			if(req.body.content) {
			    let content = req.body.content;
			    //String formatting (Yes, I know this is janky)
			    content = striptags(content);
			    let contentLines = content.split(new RegExp('\r?\n', 'g'));
			    let contentFinal = "";
			    for(let i=0; i< contentLines.length; i++) {
				lineContent = contentLines[i].replace(new RegExp('\\>'), "<span style='color: #789922;'>>");
				if(lineContent.includes("<span style='color: #789922;'>>")) {
				    contentLines[i] = lineContent + "</span>";
				}

				contentFinal += contentLines[i];
				if(i+1<contentLines.length) {
				    contentFinal += "<br>";
				}
			    }
			    updateFields.content = contentFinal;
			}

  		        if(req.body.name) {
			    updateFields.name = req.body.name;
		        }

			Reply.findOneAndUpdate({ _id: id }, updateFields, function(err, result) {
				if(err) {
					return next(err);
				}

				res.json({ result: result });
			
			}); 
		}
	}
}

