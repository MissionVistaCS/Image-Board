const Threads = require(_base + "models/thread");

module.exports = {
    '/read/isAuth': {
        methods: ['get'],
        fn: function(req, res, next) {
            if (req.isAuthenticated()) {
                res.json({ result: true });
            } else {
                res.json({ result: false });
            }
        }
    }
};