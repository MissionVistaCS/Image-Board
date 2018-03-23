const Ban = require(_base + 'models/ban');

module.exports = {
    '/delete/ban': {
        methods: ['delete'],
        fn: function(req, res, next) {
            let _id = req.body._id;
            Ban.findByIdAndRemove(_id); //TODO: Add callback function TYLER
        }
    }
};
