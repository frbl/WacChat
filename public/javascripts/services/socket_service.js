wacchatApp.factory('socket', function ($rootScope) {
  // return null;
  var socket = io.connect()

  // / Copied from http://www.ibm.com/developerworks/library/wa-nodejs-polling-app/
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments
        $rootScope.$apply(function () {
          callback.apply(socket, args)
        })
      })
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args)
          }
        })
      })
    }
  }
})
