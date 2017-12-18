'use strict';

import React from 'react';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';

import {StudentCard} from '../materials';

const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  // alignItems: 'left',
  flexWrap: 'wrap',
}

const AllStudents = ({AllStudentsQuery}) => {
  if(AllStudentsQuery.loading) {
    return <div>Loading...</div>
  } else {
    const {allStudents} = AllStudentsQuery;
    return (
      <div style={styles}>
      {
        allStudents.map(student => {
          // console.log('student.campus.name = ', student.campuse.name)
          return (<StudentCard
            key={student.id}
            name={student.name}
            // campus={student.campus.name}
            imgURL={student.imgURL}
          />)
        })
      }
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
