const atob = require('atob');
const creds = require('./src/utils/config');

module.exports = {

  production: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      database :  atob(creds.DB_NAME),
      user     :  atob(creds.DB_USER),
      password :  atob(creds.DB_PASS)
    },
    useNullAsDefault : true,
  }

};