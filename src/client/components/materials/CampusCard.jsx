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
    minWidth: 445,
  },
  media: {
    height: 500,
  },
};

function SimpleMediaCard(props) {
  const { classes, name, img, description } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        // image="http://graphql.org/img/logo.svg"
        image={img}
        title="Contemplative Reptile"
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
