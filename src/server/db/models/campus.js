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
    defaultValue: () => {
      const backgroundColor = Math.floor(Math.random()*2);
      return backgroundColor
        ? 'https://image.freepik.com/free-vector/white-room-with-light-and-coming-soon-text_1017-5070.jpg'
        : 'https://image.freepik.com/free-vector/background-of-empty-room-with-text-of-coming-soon_1017-5068.jpg'
  }},
  description: {
    type: Sequelize.TEXT,
  },
})

module.exports = Campus;
