import React, { useState } from "react";
import { Drawer, List, Divider, } from "@material-ui/core";

import {
  Button,
  ButtonLink,
  ListItemLink as ListItem
} from "../../../components";

const MenuDrawer = ({ isAuth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  }

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["HOME", "ABOUT", "RESOURCES"].map((text, i) => {
          return <ListItem
            key={i}
            isMenu={true}
            text={text}
            index={i}
            goTo={`/${text.toLowerCase()}`}
            color="white"
          />
        })}
      </List>
      <Divider />
      {isAuth && (
        <List>
          {["TBD"].map((text, i) => {
            return <ListItem
              isMenu={true}
              text={text}
              index={i}
              goTo={`/${text.toLowerCase()}`}
            />
          })}
        </List>
      )}
    </div>
  )

  return (
    <>
      <Button icon="menu" onClick={toggleDrawer(true)} />
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  )
}

export default MenuDrawer;
