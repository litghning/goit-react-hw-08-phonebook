import {
    Button,
    Input,
    InputLabel,
    ListItemButton,
    styled,
  } from '@mui/material';
  
  export const ColorLinkButton = styled(ListItemButton)(() => ({
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      borderRadius: `8px`,
      backgroundColor: '283593',
      color: '#e5eaf5',
    },
    '&.active': {
      backgroundColor: '#1a237e',
      color: '002884',
      borderRadius: `8px`,
    },
  }));
  
  export const ColorButton = styled(Button)(() => ({
    color: 'inherit',
    padding: '5px',
    border: '1px solid #1a237e',
    borderRadius: `8px`,
    '&:hover': {
      backgroundColor: `#283593`,
      color: `#fff`,
      border: `1px solid #1a237e`,
    },
  }));
  
  export const StyledInput = styled(Input)({
    marginBottom: '32px',
    '&.MuiInput-underline:after': {
      borderBottomColor: '#1a237e',
    },
  
    '&.MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#1a237e',
      },
    },
  });
  
  export const StyledInputLable = styled(InputLabel)({
    '&.Mui-focused': {
      color: '#1a237e',
    },
  });