var 
  express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(5000);

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/assets'));
});
  
app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
})
  
var port = 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
 