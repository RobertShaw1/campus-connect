// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Modal from './Modal';

const styles = {
  card: {
    maxWidth: 445,
  },
  media: {
    height: 500,
  },
};

function SimpleMediaCard(props) {
  const { classes, name, imgURL, description } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={imgURL}
        title={name}
      />
      <CardContent>
        <Typography type="headline" component="h2">
          {name}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Modal text={'View Campus'} />
      </CardActions>
    </Card>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
