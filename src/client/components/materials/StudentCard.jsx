// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
 } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Delete from 'material-ui-icons/Delete';
import Typography from 'material-ui/Typography';
import ImageAvatar from './ImageAvatar';
import Modal from './Modal';

const styles = theme => ({
  card: {
    minWidth: 275,
    margin: '.8rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  rightIcon: {
    // marginLeft: theme.spacing.unit,
    color: 'red'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  section: {
    padding: '0 1rem'
  }
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
         title="Firstname LastName"
         avatar={<ImageAvatar />}
        />
        <CardContent>
          <section className={classes.actions}>
            <article style={{width: '4rem'}}>
              <Typography type="subheading" component="h5">
                Campus
              </Typography>
              <Typography type="body1" className={classes.pos}>
                Apollo
              </Typography>
            </article>
            <CardActions className={classes.actions}>
              <Modal text={'View Profile'} />
            </CardActions>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);