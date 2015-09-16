var username = 'temp_wacchat';
var password = 'temp_password';

module.exports = {
  db: process.env.MONGOLAB_URI || 'mongodb://' + username + ':' + password + '@ds041563.mongolab.com:41563/heroku_x22pqfd3'
};

