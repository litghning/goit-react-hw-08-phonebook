import AuthorizationForm from 'components/AuthorizationForm/AuthorizationForm';
import Section from 'components/Section/Section';
import { Helmet } from 'react-helmet';

const Authorization = () => {
  return (
    <>
      <Helmet>
        <title>log in</title>
      </Helmet>
      <Section title="Log In">
        <AuthorizationForm />
      </Section>
    </>
  );
};

export default Authorization;