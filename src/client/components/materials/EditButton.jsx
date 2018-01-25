import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

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

function EditButton(props) {
  const { classes } = props;
  return (
    <div style={containerStyle}>
      <Button fab mini color="accent" aria-label="edit" className={classes.button}>
        <ModeEditIcon />
      </Button>
    </div>
  );
}

EditButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditButton);
