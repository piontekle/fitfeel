import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  ButtonLink as Button,
  Text,
  MenuDrawer
} from "../../../components";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menu: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuDrawer className={classes.menu} />
          <Text text="FitFeel" />
          <Button to="/" text="Register/Login" />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;
