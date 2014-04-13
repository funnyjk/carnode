var	
	express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(5000), 

//setting up http stuff

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/assets'));
});

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.get('/client', function(req, res){
  res.sendfile(__dirname + '/client.html');
});

var port = 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

io.sockets.on('connection', function (socket) {
  
    socket.on('switch', function(state) (
      if (state == "forward"){
	forward();
      }
      if (state == "backward"){
	backward();
      }
    
    socket.on('test', function (data){
      console.log(data);
    });
});
