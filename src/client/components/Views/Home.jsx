'use strict';

import React from 'react';

const styles = {
  main: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `url(https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb) no-repeat`,
    // background: `url(https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb) no-repeat`,
    backgroundSize: 'cover',
  },
  image: {
    background: 'cover',
  }
}

const Home = () => {
  return(
  <div style={styles.main}>
  </div>
  )
}

export default Home;
