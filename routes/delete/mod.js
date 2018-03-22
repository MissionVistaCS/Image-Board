const Mod = require(_base + 'models/mod'); // TODO: Finish mod model

module.exports = {
  '/delete/mod': {
    methods: ['delete'],
    fn: function(req, res, next) {
      let _id = req.query._id;
      let mod = Mod.findOne({_id: _id}, function(err) {
        if(err) {
          return(console.log('Error mod of id ' + _id));
        }
      });
      Mod.deleteOne(mod); // TODO: Call services method?
    }
  }
};
