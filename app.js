var 
  express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(5000),
  car;

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/assets'));
});
  
app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
  
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
3
io.sockets.on('connection', function(socket){ 
  socket.on('car', function() {
    car = socket;
    console.log("the car has connected");
  });
  socket.on('switch', function(state) {
   
  });
  socket.on('test', function(data) {
    console.log(data);
  });
  socket.emit('hello');
});