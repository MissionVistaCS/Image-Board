const Reply = require(_base + 'models/reply');

module.exports = {
  '/delete/reply': {
    methods: ['delete'],
    fn: function(req, res, next) {
      let _id = req.query._id;
      let reply = Reply.findOne({_id: _id}, function(err) {
        if(err) {
          return(console.log('Error reply of id ' + _id));
        }
      });
      Reply.deleteOne(reply); // TODO: Call services method?
    }
  }
};
