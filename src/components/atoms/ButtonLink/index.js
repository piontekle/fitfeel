import React from "react";
import { Link } from "react-router-dom";
import { Link as MULink } from "@material-ui/core";

const ButtonLink = ({ to, text }) => {
  return (
    <Link to={to}>
      <MULink
        color="inherit"
        component="button"
        variant="body2"
      >
        {text}
      </MULink>
    </Link>
  )
}

export default ButtonLink;
