var http = require('http');
var message_socket_controller = require('../app/controllers/message_socket_controller');

module.exports = function (app) {
    var server = http.createServer(app);
    var io = require('socket.io').listen(server);

    console.log('Starting sockets.io');

    io.sockets.on('connection', message_socket_controller.send_message);

    app.set('port', process.env.PORT || 3000);

    server.listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });

};