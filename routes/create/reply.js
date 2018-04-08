const Reply = require(_base + 'models/reply');
const fs = require('fs');
const path = 'uploads/';
const multer = require('multer');
const upload = multer({ dest: './uploads/'});
const striptags = require('striptags');

module.exports = {
	'/create/reply' : {
		methods: ['post'],
		middleware: [upload.single("attachment")],
		fn: function (req, res, next) {
			console.log(req.file);
			let threadId = req.body.threadId,
			    attachment = req.file,
			    ip = req.connection.remoteAddress,
			    content = req.body.content;

		    if(!allowedExt.includes(attachment.originalname.split('.').pop())) {
			attachment = null;
		    }
		    
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
		    content = contentFinal;
		    
            let reply = new Reply({ threadId: threadId, ip: ip, content: content });

            if (attachment) {
                let target_path = path + attachment.filename + "." + attachment.originalname.split('.').pop();
                reply.attachment_path = target_path;
                reply.attachment_name = attachment.originalname;
            }

            reply.save(function(err) {
                console.log(req.files);
                if(err) {
                    return next(err);
                }

                if (attachment) {
                    //Save file to fs
                    fs.rename(attachment.path, target_path, function(err) {
                        if(err) {
                            return next(err);
                        }

                        fs.unlink(attachment.path, function() {
                            if(err) {
                                return next(err);
                            }

                            res.json({ result: { threadId: threadId, attachment_path: target_path, attachment_name: attachment.originalname, ip: ip, content: content } });
                        });
                    });
                } else {
                    res.json({ result: { threadId: threadId, ip: ip, content: content } });
                }

            });
		}
	}
};
