'use strict'

/*
  TODO:
  1. Will not allow a student to be created w/o a name or email
  2. validates email
  3. Test associations
    -can set campus
    -can get campus
*/

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {Student} = require('../db/models');
const db = require('../db/db');


chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;

describe('Student model', () => {
  let mockStudent;
  beforeEach('sync model', () => {
    return db.sync({force: true})
      .then(() => {
        mockStudent = Student.build({
          name: 'testStudent',
          email: 'testStudent@me.com',
        });
      })
  })

  it('should require a name field', () => {
    expect(mockStudent.name).to.equal('testStudent');
  })
  it('name field should be a string', () => {
    expect(mockStudent.name).to.be.a('string');
  })
})

