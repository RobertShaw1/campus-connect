import React from 'react';
import {NavBar} from './materials';
import {Home} from './index';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}

const App = () => (
  <div style={styles}>
    <NavBar />
    <Home />
  </div>
)

export default App;
