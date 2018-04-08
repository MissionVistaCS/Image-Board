const Bans = require(_base + 'models/ban');

module.exports = {
    '/read/bans': {
        methods: ['get'],
        fn: function(req, res, next) {

            Bans.find({}, function(err, results) {
                if (err) {
                    return next(err);
                }

                res.json({ result: results });
            });
        }
    }
};
