'use strict';

import React from 'react';
import {CampusCard} from '../materials';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';

const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: '2rem',
}

const AllCampuses = ({AllCampusesQuery}) => {
  if (AllCampusesQuery.loading) {
    return <div>Loading...</div>
  } else {
    const {allCampuses} = AllCampusesQuery;
    return (
      <div style={styles}>
        {
          allCampuses.map(campus => (
            <CampusCard
              key={campus.id}
              name={campus.name}
              img={campus.imgURL}
              description={campus.description}
            />
          ))
        }
      </div>
    )
  }
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
