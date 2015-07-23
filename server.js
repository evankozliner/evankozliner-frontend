var express = require('express')
,   cookieParser = require('cookie-parser')
,   bodyParser = require('body-parser')
,   socket = require('socket.io')
,   _ = require('lodash');

var app = express();
var server = require('http').createServer(app);
var io = socket(server);

app.set('port', process.env.PORT || 4200);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static(__dirname + '/dist'));

server.listen(app.get('port'), function() {
  console.log("server starting on port: " + app.get('port'));
});

io.on('connection', function (socket) {
  socket.emit('hey', { hello: 'world' });
});