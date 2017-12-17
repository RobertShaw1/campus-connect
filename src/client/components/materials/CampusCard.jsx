// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import People from 'material-ui-icons/people';
import Typography from 'material-ui/Typography';
import Modal from './Modal';

const styles = {
  card: {
    minWidth: 445,
    margin: '1rem'
  },
  media: {
    height: 500,
  },
  structure: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

function SimpleMediaCard(props) {
  const { classes, name, img, description, totalStudents } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
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
      <CardContent className={classes.structure}>
        <div>
          <People />
          <Typography>
            {totalStudents} Students
          </Typography>
        </div>
        <CardActions>
          <Modal text={'View Campus'} />
        </CardActions>
      </CardContent>
    </Card>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
