import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
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

function Buttons(props) {
  const { classes } = props;
  return (
    <div style={containerStyle}>
      <Button fab mini color="primary" aria-label="add" className={classes.button}>
        <AddIcon />
      </Button>
      {/* <Button fab mini color="accent" aria-label="edit" className={classes.button}>
        <ModeEditIcon />
      </Button>
      <Button fab disabled aria-label="delete" className={classes.button}>
        <DeleteIcon />
      </Button>
      <Button fab mini disabled aria-label="delete" className={classes.button}>
        <DeleteIcon />
      </Button> */}
    </div>
  );
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons);
