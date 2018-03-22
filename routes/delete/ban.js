const Ban = require(_base + 'models/ban');

module.exports = {
  '/delete/ban': {
    methods: ['delete'],
    fn: function(req, res, next) {
      let _id = req.query._id;
      let ban = Ban.findOne({_id: _id}, function(err) {
        if(err) {
          return(console.log('Error ban of id ' + _id));
        }
      });
      Ban.deleteOne(_id); // TODO: Call services method?
    }
  }
};
