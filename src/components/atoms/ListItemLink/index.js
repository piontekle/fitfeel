import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const ListItemLink = ({
  isMenu,
  isButton,
  text,
  icon,
  index,
  goTo
}) => {
  const [selectedIndex, setSelectedIndex] = useState(false);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  }

  return (
    <Link to={goTo}>
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
