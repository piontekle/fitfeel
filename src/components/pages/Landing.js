import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import { TextCard as Card } from "../../components";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

//    backgroundColor: "#D3D3D3",

const Landing = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Card />
    </Grid>
  )
}

export default Landing;
