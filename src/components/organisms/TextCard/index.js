import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent } from '@material-ui/core';

import { ButtonLink as Button, Text } from "../../../components";

const useStyles = makeStyles({
  root: {
    width: 275,
    margin: "auto",
    marginTop: "15px"
  },
  title: {
    fontSize: 14
  }
});

const TextCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Text
          className={classes.title}
          color="textSecondary"
          gutterBottom
          text="Welcome to FitFeel"
        />
        <Text
          variant="h5"
          text="An app to check-in mentally before & after workouts to keep your mind just as fit as your body."
        />
      </CardContent>
      <CardActions>
        <Button to="/about" text="Learn More" />
      </CardActions>
    </Card>
  )
}

export default TextCard;
