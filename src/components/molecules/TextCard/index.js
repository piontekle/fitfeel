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

const TextCard = ({ text, content, link, linkText }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Text
          className={classes.title}
          color="textSecondary"
          gutterBottom
          text={text}
        />
        <Text
          variant="h5"
          text={content}
        />
      </CardContent>
      <CardActions>
        <Button to={link} text={linkText} />
      </CardActions>
    </Card>
  )
}

export default TextCard;
