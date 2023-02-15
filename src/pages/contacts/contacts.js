import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/operations'; 
import { selectIsLoading, selectError } from 'redux/selectors';
import Filters from 'components/Filter/Filter';
import Phonebook from 'components/Phonebook/Phonebook';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import { Box } from '@mui/material';
import { LinearIndeterminate } from 'components/Loader/Loader';
import { Helmet } from 'react-helmet';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Section title="Phonebook">
          <Phonebook />
        </Section>
        <Section title="Contacts">
          <Filters />
          {isLoading && !error && <LinearIndeterminate />}
          <Contacts />
        </Section>
      </Box>
    </>
  );
};

export default ContactsView;