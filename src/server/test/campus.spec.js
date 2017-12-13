'use strict'

/*
  TODO:
  1. Will not allow a campus to be created w/o a name
  2. Has a before delete hook that removes students from the campus
  https://github.com/FullstackAcademy/1706-FSA-CH-Library/blob/master/01-junior-phase/10-wikistack/testing-live-review/test/page.model.test.js
*/

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { Campus } = require('../db/models');
const db = require('../db/db');


chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;

describe('Campus model', () => {
  let mockCampus;
  beforeEach('sync model', () => {
    return db.sync({ force: true })
      .then(() => {
        mockCampus = Campus.build({
          name: 'testCampus',
          imgURL: 'http://someurl.com',
          description: 'a brief description of the campus',
        });
      })
  })
  it('should have a name', () => {
    expect(mockCampus).to.have.property('name');
    expect(mockCampus.name).to.be.a('string');
  })
  it('should have an imgURL', () => {
    console.log(mockCampus.imgURL)
    expect(mockCampus).to.have.property('imgURL');
    expect(mockCampus.imgURL).to.be.a('string');
  })
  it('should have a description', () => {
    expect(mockCampus).to.have.property('description');
    expect(mockCampus.description).to.be.a('string');
  })
})
