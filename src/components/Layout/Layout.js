import { Outlet } from 'react-router-dom';
import AppBarCom from 'components/AppBar';
import { Suspense } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import { Container } from '@mui/material';
import { Toaster } from 'react-hot-toast';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#757ce8',
      darker: '#002884',
    },
    neutral: {
      main: '#f44336',
      contrastText: '#ba000d',
    },
  },
});

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBarCom position="static" />
      <Suspense fallback={null}>
        <main>
          <Container maxWidth="lg" sx={{ pt: '32px' }}>
            <Outlet />
          </Container>
        </main>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>
  );
};