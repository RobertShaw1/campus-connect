'use strict';
const Sequelize = require('sequelize') ;
const db = require('../db');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imgURL: {
    type: Sequelize.STRING(1000),
  },
  description: {
    type: Sequelize.TEXT,
  },
})

module.exports = Campus;
