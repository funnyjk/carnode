var 
  express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(5000),
  serialport = require("serialport"),
  SerialPort = serialport.SerialPort, // localize object constructor
  fs = require('fs');

//SERIAL
var portName = '/dev/ttyACM0';
var serial = new SerialPort(portName, {
   baudRate: 9600,
   dataBits: 8, 
   parity: 'none', 
   stopBits: 1, 
   flowControl: false 
});
  
var lightOn = false;

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
 
function serial_start() {
  serial.on("open", function () {
      console.log('open serial communication');
    });
}

serial_start();

function forward() {
  serial.write('f');
}

function backward() {
  serial.write('b');
}
function left() {
  serial.write('l');
}

function right() {
  serial.write('r');
}
function stop() {
  serial.write('s');
}

var socketIO = require('socket.io-client');
var socket = socketI('http://nodeplayscar.herokuapp.com/');
  socket.on('connect', function(){
   
  socket.on('switch', function(state) {
    if (state == "forward"){
      forward();
    }
    if (state == "backward") {
      backward();
    }
     if (state == "left"){
      left();
    }
    if (state == "right") {
      right();
    }
     if (state == "stop"){
      stop();
    }
  });
  socket.on('test', function(data) {
    console.log(data);
  });
});
