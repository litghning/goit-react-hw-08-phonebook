import NavigationAuth from 'components/NavigationAuth';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuthHook } from 'hook/useAuth';
import { AppBar, Box, Container } from '@mui/material';

const AppBarCom = () => {
  const { isLoggedIn } = useAuthHook();
  return (
    <AppBar sx={{ pt: '20px', pb: '20px' }} position="static">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <NavigationAuth />}
        </Box>
      </Container>
    </AppBar>
  );
};
export default AppBarCom;