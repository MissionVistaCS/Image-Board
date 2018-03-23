const Thread = require(_base + 'models/thread');

module.exports = {
    '/delete/thread': {
        methods: ['delete'],
        fn: function(req, res, next) {
            let _id = req.query._id;
            Thread.findByIdAndRemove(_id, function(err, thread) {
              if(err) {
                return next(err);
              }
              res.json({result: thread});
            });
        }
    }
};
