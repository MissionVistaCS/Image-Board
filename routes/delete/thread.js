const Thread = require(_base + 'models/thread');

module.exports = {
    '/delete/thread': {
        methods: ['delete'],
        fn: function(req, res, next) {
            let _id = req.query._id;
            Thread.findByIdAndRemove(_id); //TODO: Add callback function TYLER
        }
    }
};
