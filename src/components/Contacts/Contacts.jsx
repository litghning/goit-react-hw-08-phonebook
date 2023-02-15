import React from 'react';
import { ColorButton } from 'components/Styled/Styled';
import { List, ListItem, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
  dispatch(deleteContact(id));
  };
  return  (<List sx={{ ml: 'auto', mr: 'auto', width: '48ch' }}>
  {contacts.map(({ id, name, number }) => (
    <ListItem
      key={id}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: 0,
        mb: '16px',
        width: '100%',
      }}
    >
      <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {name}: <span>{number}</span>
      </Typography>

      <ColorButton
        sx={{ width: '8ch', fontSize: '12px' }}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </ColorButton>
    </ListItem>
  ))}
</List>)
};
export default Contacts;