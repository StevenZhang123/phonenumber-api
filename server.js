var app = require('./app');
var port = process.env.PORT || 5000;

var server = app.listen(port, function(){
  console.log('listening on port '+port);
});

//for wrong routes
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});
