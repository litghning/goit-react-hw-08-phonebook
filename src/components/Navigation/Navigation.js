import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { ColorLinkButton } from 'components/Styled/Styled';
import React from 'react';

const Navigation = () => {
  
  return (
    
      <List sx={{ display: 'flex' }}>
        <ListItem color="secondary">
          <ColorLinkButton component={NavLink} to="/" color="inherit">
            Home
          </ColorLinkButton>
        </ListItem>
          <ListItem>
            <ColorLinkButton component={NavLink} to="/contacts" color="inherit">
              Contacts
            </ColorLinkButton>
          </ListItem>
      </List>
    
  );
};

export default Navigation;