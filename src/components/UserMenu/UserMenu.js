import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuthHook } from 'hook/useAuth';
import { Avatar, Box, Typography } from '@mui/material';
import { ColorButton } from 'components/Styled/Styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuthHook();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <Avatar
        sx={{
          backgroundColor: '#283593',
          color: 'inherit',
          border: '1px solid #283593',
        }}
        size="sm"
      >
        {user.name.charAt()}
      </Avatar>
      <Typography>Welcome, {user.name}!</Typography>
      <ColorButton
        variant="outlined"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </ColorButton>
    </Box>
  );
};
export default UserMenu;