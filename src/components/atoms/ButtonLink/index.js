import React from "react";
import { Link } from "react-router-dom";
import { Link as MULink } from "@material-ui/core";

const ButtonLink = ({ to, text, className }) => {
  const style = {
    base: {
      color: "#DCDCDC",
      fontWeight: "bold"
    }
  }

  return (
    <Link to={to}>
      <MULink
        color="inherit"
        className={className}
        style={style.base}
        component="button"
        variant="body2"
      >
        {text.toUpperCase()}
      </MULink>
    </Link>
  )
}

export default ButtonLink;
