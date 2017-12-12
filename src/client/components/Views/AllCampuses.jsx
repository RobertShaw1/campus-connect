'use strict';

import React from 'react';
import {CampusCard} from '../materials';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';

const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}

const AllCampuses = (props) => {
  console.log('props:', props);
  const { client, AllCampusesQuery } = props;
  // console.log('client = ', client)
  // console.log('allCampusesQuery = ', allCampusesQuery)
  if (!AllCampusesQuery) {
    return (
      <div>Loading...</div>
    )
  }
  const Campuses = AllCampusesQuery.allCampuses;

  return (
    <div style={styles}>
      {
        Campuses.map(campus => (
          <CampusCard
            key={campus.id}
            name={campus.name}
            img={campus.imgurl}
            description={campus.description}
          />
        ))
        // <CampusCard
        //   name='New Camp'
        //   img={`http://www.welcome-to-barcelona.com/wp-content/uploads/2012/01/Barcelona-New-Camp-Nou.jpg`}
        //   description={'A description of a campus goes here'}
        // />
      }
    </div>
  )
}

const ALL_CAMPUSES_QUERY = gql`
  query AllCampusesQuery {
    allCampuses {
      id
      name
      imgURL
      description
    }
  }
`
// export default withApollo(AllCampuses);

export default compose(
  withApollo,
  graphql(ALL_CAMPUSES_QUERY, {name: 'AllCampusesQuery'}),
  // connect()
)(AllCampuses);
