import React from "react";
import { Typography } from "@material-ui/core";

const Text = ({
  text,
  className,
  variant
}) => {
  return (
    <Typography variant={variant} className={className}>
      {text}
    </Typography>
  )
}

export default Text;
