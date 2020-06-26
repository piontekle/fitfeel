import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const ListItemLink = ({
  isMenu,
  isButton,
  text,
  icon,
  index,
  goTo,
  color
}) => {
  const [selectedIndex, setSelectedIndex] = useState(false);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  }

  const styles = {
    white: {
      color: "#D3D3D3",
      fontWeight: "bold",
      textDecoration: "none"
    }
  }

  return (
    <Link to={goTo} style={styles[color]}>
      <ListItem
        button={isButton || isMenu}
        selected={isMenu && selectedIndex === index}
        onClick={() => handleItemClick(index)}
      >
      {isMenu ? (
        <>
         { icon && <ListItemIcon>{icon}</ListItemIcon> }
        <ListItemText primary={text} />
        </>
      ) : (
        <ListItemText primary={`${index} ${text}`}/>
      )

      }
      </ListItem>
    </Link>
  )
}

export default ListItemLink;
