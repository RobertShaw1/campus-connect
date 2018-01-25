import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';

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

function DeleteButton(props) {
  const { classes } = props;
  return (
    <div style={containerStyle}>
      <Button fab disabled aria-label="delete" className={classes.button}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

DeleteButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteButton);
