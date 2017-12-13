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
    defaultValue: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  },
})


module.exports = Student;
