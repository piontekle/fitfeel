import React from "react";
import { Typography } from "@material-ui/core";

const Text = ({
  text,
  className,
  variant,
  component
}) => {
  return (
    <Typography
      variant={variant}
      component={component}
      className={className}
    >
      {text}
    </Typography>
  )
}

export default Text;
