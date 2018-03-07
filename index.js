var express = require('express');
var app = express();
app.get('/api', (req, res) => {
  res.json({message: 'Welcome to the Server'});
});
app.listen(8880, ()=>{
  console.log('API listening on port 8081');
});
