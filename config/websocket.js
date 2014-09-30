var http = require('http');

module.exports = function (app) {
  var server = http.createServer(app);
 
  app.set('port', process.env.PORT || 3000);

  server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
  });
};