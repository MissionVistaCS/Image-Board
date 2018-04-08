const Boards = require(_base + 'models/board');

module.exports = {
    '/read/boards': {
        methods: ['get'],
        fn: function(req, res, next) {
            //are these necessary?
            let category = req.query.category,
                name = req.query.name,
                letter = req.query.letter,
                favicon = req.query.favicon;

            Boards.find({}, function(err, results) {
                if (err) {
                    return next(err);
                }

                res.json({ result: results });
            });
        }
    }
};
