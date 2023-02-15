import { Box } from '@mui/material';
import Section from 'components/Section/Section';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
const HomeView = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pt: '32px',
        flexDirection: 'column',
      }}
    >
      <Section title="Welcome to Ukraine!!!">
        <AddToHomeScreenIcon fontSize="large" />
      </Section>
    </Box>
  );
};
export default HomeView;