console.log('-- sockets.js -----');

var sockets = {};

var io = require('socket.io')();
sockets.io = io;

io.on('connection',socket => {
  console.log('A user connected');
  socket.on('message',m => {
    console.log(m.text);
  });
});

module.exports = sockets;