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

  it('should have a name', () => {
    expect(mockStudent).to.have.property('name');
    expect(mockStudent.name).to.be.a('string');
  })
  it('should have an email', () => {
    expect(mockStudent).to.have.property('email');
    expect(mockStudent.name).to.be.a('string');
  })
  it('should have a phone', () => {
    expect(mockStudent).to.have.property('phone');
    expect(mockStudent.name).to.be.a('string');
  })
  it('should have an imgURL', () => {
    expect(mockStudent).to.have.property('imgURL');
    expect(mockStudent.name).to.be.a('string');
  })
})

