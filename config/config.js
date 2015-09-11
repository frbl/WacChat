var username = 'temp_wacc2014';
var password = 'temp_password';

module.exports = {
  db: process.env.MONGOLAB_URI || 'mongodb://' + username + ':' + password + '@ds055772.mongolab.com:55772/heroku_knb4ckbx'
};
