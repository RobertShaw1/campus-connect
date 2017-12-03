'use strict'
const chalk = require('chalk');

// register our models
require('./models');
const db = require('./db');
const dbName = db.config.database;

// sync the db, creating it if necessary
function sync(force=false, retries=0, maxRetries=5) {
  return db.sync({force})
  .then(ok => console.log(`Synced models to db ${dbName}`))
  .catch(fail => {
    // Don't do this auto-create nonsense in prod, or
    // if we've retried too many times. 
    if (process.env.NODE_ENV === 'production' || retries > maxRetries) {
      console.error(chalk.red(`********** database error ***********`))
      console.error(chalk.red(`    Couldn't connect to ${dbName}`))
      console.error()
      console.error(chalk.red(fail))
      console.error(chalk.red(`*************************************`))
      return
    }
    // Otherwise, do this autocreate nonsense
    console.log(`${retries ? `[retry ${retries}]` : ''} Creating database ${dbName}...`)
    return new Promise((resolve, reject) =>
      require('child_process').exec(`createdb "${dbName}"`, resolve)
    ).then(() => sync(true, retries + 1))
  })
}

db.didSync = sync();
