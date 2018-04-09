const Thread = require(_base + 'models/thread');

module.exports = {
    '/delete/thread': {
        methods: ['post'],
        fn: function(req, res, next) {
            let _id = req.body._id;
            Thread.findByIdAndRemove(_id, function(err, thread) {
              if(err) {
                return next(err);
              }
              res.json({result: thread});
            });
        }
    }
};
