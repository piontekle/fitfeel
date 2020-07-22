import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import { WelcomeCard } from "../../components";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const Landing = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <WelcomeCard />
    </Grid>
  )
}

export default Landing;
