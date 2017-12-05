'use strict'

const debug = require('debug')('sql');
const chalk = require('chalk');
const Sequelize = require('sequelize');
const dbName = require('../../../package.json').name;

let connectionString;

if(process.env.NODE_ENV === 'test') {
  console.log(chalk.magenta('In test environment...'));
  connectionString = `postgres://localhost:5432/${dbName}-test`;
} else {
  connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${dbName}`;
}

console.log(chalk.yellow(`Opening database connection to ${connectionString}`));

// create the database instance that can be used in other database files
const db = new Sequelize(connectionString, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries 
  native: true    // lets Sequelize know we can use pg-native for ~30% more speed (this may cause problems so take it out if necessary)
});

module.exports = db;
