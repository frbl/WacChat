wacchatApp.controller('ChatController', function($scope, $http, $timeout, Message, Socket) {
  $scope.message = {};
  $http({
    method: 'GET',
    url: 'api'
  }).success(function(data) {
    $scope.chat_content = data;
  });

  $scope.send_message = function() {
    Message.save($scope.message);
    socket.emit('send_message', $scope.message);
    add_message($scope.message);
    $scope.message = {
      name: $scope.message.name
    };
  };

  socket.on('receive_message', function(data) {
    add_message(data);
  });

  function add_message(message) {
    $scope.messages = $scope.messages || [];
    $scope.messages.push(message);
  }

  $scope.refresh = function() {
    Message.query(function(data) {
      $scope.messages = data;
      console.log('Refreshed: ' + data);
    });
  };
});
