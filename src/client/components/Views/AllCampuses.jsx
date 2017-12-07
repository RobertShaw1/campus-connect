'use strict';

import React from 'react';
import {CampusCard} from '../materials';

const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}

const AllCampuses = () => {
  return (
    <div style={styles}>
      <CampusCard />
      <CampusCard />
      <CampusCard />
    </div>
  )
}

export default AllCampuses;

