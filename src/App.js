import './App.css';
import { Analytics } from 'aws-amplify';
import { useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App({ signOut, user }) {
  useEffect(() => {
    Analytics.record('App component mounted');
  }, []);
  const formFields = {
    signUp: {
      phone_number: {
        dialCode: '+374',
      },
    },
  };
  return (
    <Authenticator
      signUpAttributes={[
        'address',
        'birthdate',
        'email',
        'family_name',
        'gender',
        'given_name',
        'locale',
        'middle_name',
      ]}
      formFields={formFields}
    >
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
