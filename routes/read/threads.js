const Threads = require(_base + 'models/thread'),
      Replies = require(_base + "models/reply"),
      striptags = require("striptags");

module.exports = {
    '/read/threads': {
	methods: ['get'],
	fn: function(req, res, next) {
	    let letter = req.query.letter;

	    Threads.find({ boardId: letter }, function(err, results) {
		if(err) {
		    return next(err);
		} else {
		    for(let i = 0; i < results.length; i++) {
			results[i].content = striptags(results[i].content);
		    }
		    res.json({ result: results });
		}
	    });
	}
    }
};
