exports.manage_messages = function (socket) {
  socket.on('send_message', function (data) {
    console.log('Message over Socket: ' + data);
    socket.broadcast.emit('receive_message', data);
  });
};