const Thread = require(_base + 'models/thread');
const fs = require('fs');
const path = 'uploads/';
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const striptags = require('striptags');

module.exports = {
    '/create/thread': {
        methods: ['post'],
        middleware: [upload.single("attachment")],
        fn: function (req, res, next) {
	    let allowedExt = ['png', 'jpg', 'jpeg', 'webm'];
            let name = req.body.name,
                board = req.body.board,
                attachment = req.file,
                pinned = req.body.pinned | false,
                ip = req.connection.remoteAddress,
                content = req.body.content,
                title = req.body.title + ":";

	    //String formatting (Yes, I know this is janky)
	    content = striptags(content);
	    let contentLines = content.split(new RegExp('\r?\n', 'g'));
	    let contentFinal = "";
	    for(let i=0; i< contentLines.length; i++) {
		lineContent = contentLines[i].replace(new RegExp('\\>', 'g'), "<span style='color: #789922;'>>");
		if(lineContent.includes("<span style='color: #789922;'>>")) {
		    contentLines[i] = lineContent + "</span>";
		}

		contentFinal += contentLines[i];
		if(i+1<contentLines.length) {
		    contentFinal += "<br>";
		}
	    }
	    content = contentFinal;
	    
            Thread.findOne({ title: title }, function (err, result) {
                if (err) {
                    return next(err);
                }

                if (result) {
                    return next(new Error('Thread with that title already exists.'));
                }
                let thread = new Thread({
                    name: name,
                    boardId: board,
                    pinned: pinned,
                    ip: ip,
                    content: content,
                    title: title
                });

		console.log(content);
		
		let target_path;
                if (attachment) {
                    target_path = path + attachment.filename + "." + attachment.originalname.split('.').pop();
                    thread.attachment_path = target_path;
                    thread.attachment_name = attachment.originalname;
                }

                thread.save(function (err) {
                    console.log(req.files);
                    if (err) {
                        return next(err);
                    }

                    if (attachment && allowedExt.includes(attachment.originalname.split('.').pop())) {
                        //Save file to fs
                        fs.rename(attachment.path, target_path, function (err) {
                            if (err) {
                                return next(err);
                            }

                            fs.unlink(attachment.path, function () {
                                if (err) {
                                    return next(err);
                                }

                                res.redirect('/' + board + '/thread/' + thread._id);
                            });
                        });
                    } else {
                        res.redirect('/' + board + '/thread/' + thread._id);
                    }
                });
            });
        }
    }
};
