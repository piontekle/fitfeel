import React from "react";
import { Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const AppButton = ({ isIcon, icon, text, onClick, className }) => {

  return (
    icon ? (
      <IconButton
        edge="start"
        color="inherit"
        className={className}
        onClick={onClick}
        aria-label={icon}
      >
        {icon === "menu" ? (
          <MenuIcon />
        ) : ( <> </>)

        }
      </IconButton>
    ) : (
      <Button color="inherit" onClick={onClick}>
        {text}
      </Button>
    )
  )
}

export default AppButton;
