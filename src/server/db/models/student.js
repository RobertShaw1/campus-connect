'use strict';

const Sequelize = require('sequelize');
const db =  require('../db');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  phone: {
    type: Sequelize.STRING,
    defaultValue: 'Unlisted'
  },
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmPyKqPknUxCiBrXNUYxAA89HQWh5UrxvyKnSjRggq-mUZFLe'
  },
})


module.exports = Student;
