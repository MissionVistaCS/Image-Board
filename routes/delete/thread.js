const Thread = require(_base + 'models/thread');

module.exports = {
  '/delete/thread': {
    methods: ['delete'],
    fn: function(req, res, next) {
      let _id = req.query._id;
      let thread = Thread.findOne({_id: _id}, function(err) {
        if(err) {
          return(console.log('Error thread of id ' + _id));
        }
      });
      Thread.deleteOne(thread); // TODO: Call services method?
    }
  }
};
