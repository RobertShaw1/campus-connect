// NODE MODULES
import React from 'react';
import { connect } from 'react-redux';
import universal from 'react-universal-component'

//LOCAL MODULES
import {NavBar} from './materials';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}

const App = ({page}) => {
  const View = universal(import(`./Views/${page}`));
  return (
    <div style={styles}>
      <NavBar />
      <View />
    </div>
  )
}

const mapState = ({page}) => ({page});

export default connect(mapState)(App);
