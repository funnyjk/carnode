var 
  express = require('express'),
  app = express(),
  server = require('http').createServer(app);

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
