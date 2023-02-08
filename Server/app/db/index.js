// const pgp = require('pg-promise')();

// // postgres://username:password@host:port/database?ssl=false&application_name=name
// // &fallback_application_name=name&client_encoding=encoding
// const connection_string = "postgres://postgres:Duongminh410@localhost:2014/official";

// const db = pgp(connection_string);
// module.exports = db;

const { Client } = require('pg'); 
// Connect to database
const client = new Client({
  host:'localhost',
  user:'postgres',
  port:'2014',
  password:'Duongminh410',
  database:'sunrise_english',
})

client.connect();

module.exports = client;