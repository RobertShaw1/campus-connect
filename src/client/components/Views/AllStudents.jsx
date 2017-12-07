'use strict';

import React from 'react';
import {StudentCard} from '../materials';

const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  // alignItems: 'left',
  flexWrap: 'wrap',
}

const AllStudents = () => {
  return (
    <div style={styles}>
      <StudentCard />
      <StudentCard />
      <StudentCard />
      <StudentCard />
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </div>
  )
}

export default AllStudents;
