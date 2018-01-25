import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
  },
});

const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '2rem',
}

function AddButton(props) {
  const { classes, onClick } = props;
  return (
    <div style={containerStyle}>
      <Button fab mini color="primary" aria-label="add" className={classes.button} onClick={onClick}>
        <AddIcon />
      </Button>
    </div>
  );
}

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);
