'use strict';

import React from 'react';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';

import {StudentCard} from '../materials';
import Buttons from '../materials/Buttons';
import Button from 'material-ui/Button/Button';

const styles = {
  cards: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  // container: {
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'flex-start',
  // },
  // button: {
  //   height: '100%',
  //   width: '100%',
  //   display: 'flex',
  //   justifyContent: 'flex-end',
  //   alignItems: 'flex-end',
  // }
}

const AllStudents = ({AllStudentsQuery}) => {
  if(AllStudentsQuery.loading) {
    return <div>Loading...</div>
  } else {
    const {allStudents} = AllStudentsQuery;
    return (
      <div style={styles.container}>
        <Buttons />
        <div style={styles.cards}>
          {
            allStudents.map(student => {
              return (<StudentCard
                key={student.id}
                name={student.name}
                campus={student.campus.name}
                imgURL={student.imgURL}
                />)
              })
            }
        </div>
      </div>
    )
  }
}

const ALL_STUDENTS_QUERY = gql`
  query AllStudentsQuery {
    allStudents {
      id
      name
      imgURL
      campus {
        name
      }
    }
  }
`

export default compose(
  withApollo,
  graphql(ALL_STUDENTS_QUERY, {name: 'AllStudentsQuery'}),
  // connect()
)(AllStudents);
