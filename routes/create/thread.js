const Thread = require(_base + 'models/thread');
const fs = require('fs');
const path = _base + 'uploads/'
const multer = require('multer');
const upload = multer({ dest: './uploads/'});

module.exports = {
	'/create/thread' : {
	    methods: ['post'],
	    middleware: [upload.single("attachment")],
	        fn: function (req, res, next) {
		    console.log(req.file);
			let name = req.body.name,
			    board = req.body.board,
			    attachment = req.file,
			    pinned = req.body.pinned,
			    ip = req.connection.remoteAddress,
			    content = req.body.content,
			    title = req.body.title;

			Thread.findOne({ name: name }, function (err, result) {
				if (err) {
					return next(err);
				}

				if (result) {
					return next(new Error('Thread with that name already exists.'));
				}

			    let target_path = path + attachment.filename + "." + attachment.originalname.split('.').pop();;
			    let thread = new Thread({ name: name, boardId: board, attachment_path: target_path, attachment_name: attachment.originalname, pinned: pinned, ip: ip, content: content, title: title });
				thread.save(function(err) {
				    console.log(req.files);
				        if(err) {
						return next(err);
					}

				        //Save file to fs	
				        fs.rename(attachment.path, target_path, function(err) {
					    if(err) {
					        return next(err);
					    }
					
					    fs.unlink(attachment.path, function() {
					        if(err) {
						    return next(err);
					        }
					    });
					});
				    
					res.json({ result: { 
						name: name, 
						board: board,
   					        attachment_name: attachment.originalname,
					        content: content,
					        title: title,
					        pinned: pinned
					}
					});
				});
			});
		}
	}
}
