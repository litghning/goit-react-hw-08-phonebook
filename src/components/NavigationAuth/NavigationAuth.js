import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { ColorLinkButton } from 'components/Styled/Styled';
;


const NavigationAuth = () => {
  return (
    <List sx={{ display: 'flex' }}>
    <ListItem color="secondary">
      <ColorLinkButton component={NavLink} to="/register" color="inherit">
        Sing Up
      </ColorLinkButton>
    </ListItem>
    <ListItem>
      <ColorLinkButton component={NavLink} to="/login" color="inherit">
        Log In
      </ColorLinkButton>
    </ListItem>
  </List>
  );
};
export default NavigationAuth;