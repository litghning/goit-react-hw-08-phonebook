import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Section from 'components/Section/Section';
import { Helmet } from 'react-helmet';

const RegistrationView = () => {
  return (
    <>
      <Helmet>
        <title>register</title>
      </Helmet>
      <Section title="Sing Up">
        <RegistrationForm />
      </Section>
    </>
  );
};

export default RegistrationView;