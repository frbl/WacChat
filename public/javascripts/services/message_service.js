wacchatServices.factory('Message', function ($resource) {
  return $resource('api/messages/:messageId', { messageId: '@messageId' })
})
