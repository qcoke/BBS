var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

/* var http = require('http').Server(app);
var io = require('socket.io')(http);
*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// io.on('connection', function(socket){
//   console.log('a user connected');
//   // 推送
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
//   // 监听用户的下线动作
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// })

// http.listen(3000, function(){
//   console.log('listening on * 3000');
// });

module.exports = app;
