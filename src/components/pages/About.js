import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import { DivContainer as Container, Text } from "../../components";
import brain from '../atoms/images/strongbrain.jpg';
import feelForm from '../atoms/images/feelform.png';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  header: {
    marginTop: "8px",
    marginBottom: "8px"
  },
  p: {
    marginBottom: "10px"
  }
});

const About = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Container>
        <Text variant="h4" className={classes.header} text="About FitFeel" />
        <Text
          variant="body1"
          className={classes.p}
          text="Obviously taking care of yourself physically is important to you, but are you keeping yourself mentally fit as well?  With FitFeel, you can 'check-in' with yourself before and after workouts. Did you sleep well? Are deadlines coming up? Are you excited for the concert next week? Take a minute to think about where you are mentally before starting a workout and how you're feeling after."
        />
        <img src={brain} alt="strong-brain" /><br/ >
        <small>source: https://www.myvmc.com/health/brain-health/</small>
      </Container>
      <Container>
        <Text variant="h4" className={classes.header} text="How?" />
        <Text
          variant="body1"
          className={classes.p}
          text="Before each workout, open FitFeel to answer a few quick questions about where you are mentally. You can simply check the boxes or elaborate - you can put as much time as you want or have into it."
        />
        <img src={feelForm} id="feelFormImg" alt="check-in-form" />
        <Text
          variant="body1"
          text="Then after your workout, check-in again to see how things have changed."
        />
      </Container>
    </Grid>
  )
}

export default About;
