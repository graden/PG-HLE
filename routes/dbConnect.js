var pg = require('pg');
var config = require('./config');

var conString = "pg://postgres:pharaon@localhost:5432/Ratting";
var pgClient = new pg.Client(conString);
pgClient.connect();

module.exports = pgClient;