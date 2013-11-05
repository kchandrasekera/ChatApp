var socketio = require('socket.io');

var createChat = function(server) {
  var io = socketio.listen(server);
  io.sockets.on('connection', function (socket) {
    // send to the new client
    socket.emit('greeting', { hello: 'world' });

    // listen for messages sent by the client and broadcast to all sockets
    socket.on('message', function (data) {
      io.sockets.emit("broadcast", data);
    });
  });
}

exports.createChat = createChat;