const Board = require(_base + 'models/board');

module.exports = {
  '/delete/board': {
    methods: ['delete'],
    fn: function(req, res, next) {
      let letter = req.query.letter;
      let board = Board.findOne({letter: letter}, function(err) {
        if(err) {
          return console.log('Error board ' + letter);
        }
      });
      Board.deleteOne(board); // TODO: Call services method?
    }
  }
};
