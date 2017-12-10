/* eslint-disable flowtype/require-valid-file-annotation */

// NODE MODULES
import React, {Component} from 'react';
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

// LOCAL MODULES
import { goToPage } from '../../actions'

class NavBar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { onClick } = this.props;

    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" onClick={() => onClick('HOME')} />
          <Tab label="Campuses" onClick={() => onClick('CAMPUSES')}  />
          <Tab label="Students" onClick={() => onClick('STUDENTS')}  />
        </Tabs>
      </Paper>
    );
  }
}

const mapDispatch = {onClick: goToPage};

export default connect(null, mapDispatch)(NavBar);
