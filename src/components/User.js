import React from 'react';

import Button from '@material-ui/core/Button';
import { Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 375,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 24,
    },
    pos: {
      marginBottom: 12,
    },
  });



export default function User(props) {
    const { user } = props;

    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.root}>
            <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {user.username}
        </Typography>
        <Typography variant="h5" component="h2">
          LVL: {Math.round(user.impact*10)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    );
}

/*

        <div key={user.id}>
            <h1>{user.username}</h1>
            <h2>LVL: {user.impact}</h2>
            <Button startIcon={<SaveIcon />} variant="contained" color="primary">Continua</Button>
        </div>

        */