import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";

import { TextCard as Card, WelcomeCard } from "../../../components";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    margin: "10px",
    borderRadius: "5px",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

const DivContainer = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      {props.children}
    </Container>
  )
}


export default DivContainer;
