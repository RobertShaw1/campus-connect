'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {CampusCard} from '../materials';

const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
}

const AllCampuses = props => {
  const {allCampuses} = props;

  return (
    <div style={styles}>
      {
        allCampuses.map(campus =>(
          <CampusCard
            key={campus.id}
            name={campus.name}
            imgURL={campus.imgURL}
            description={campus.description}
          />
        ))
      }
    </div>
  )
}

const mapState = ({allCampuses}) => ({allCampuses});

export default connect(mapState)(AllCampuses);
