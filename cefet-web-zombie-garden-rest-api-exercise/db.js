var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  database: 'zombies',
  user: 'root',
  password: '',
  multipleStatements: true
});

connection.connect();

module.exports = connection;
