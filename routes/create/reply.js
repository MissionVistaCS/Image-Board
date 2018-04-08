const Reply = require(_base + 'models/reply');
const fs = require('fs');
const path = 'uploads/';
const multer = require('multer');
const upload = multer({ dest: './uploads/'});

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