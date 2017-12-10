/* eslint-disable flowtype/require-valid-file-annotation */

// NODE MODULES
import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

// LOCAL MODULES
import { goToPage } from '../../actions'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class NavBar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, onClick } = this.props;

    return (
      <Paper className={classes.root}>
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

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledNavBar = withStyles(styles)(NavBar);
const mapDispatch = {onClick: goToPage};


export default connect(null, mapDispatch)(styledNavBar);
