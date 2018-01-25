'use strict';

import React from 'react';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';

import {AddStudentForm, Loading, StudentCard} from '../materials';

const styles = {
  cards: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
}

const AllStudents = ({AllStudentsQuery}) => {
  if(AllStudentsQuery.loading) {
    return <Loading />
  } else {
    const {allStudents} = AllStudentsQuery;
    return (
      <div style={styles.container}>
        <AddStudentForm />
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
