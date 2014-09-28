exports.send_message = function(socket) {
    socket.on('send_message',  function(data){
        console.log('Message over Socket');
        console.log(data);
        socket.broadcast.emit('receive_message', data);
    });
};