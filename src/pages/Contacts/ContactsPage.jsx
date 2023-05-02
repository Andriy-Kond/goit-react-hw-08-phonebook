import { PreLoader } from 'components/Preloader/PreLoader';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
} from 'redux/phonebook/selectorsPhonebook';

import { Filter } from 'components/Filter/Filter';
import { UserForm } from 'components/UserForm/UserForm';
import { Contacts } from 'components/Contacts/Contacts';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <UserForm />
        <h2>Contacts</h2>
        <Filter />
        <div style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
          {isLoading && !error && <PreLoader />}
        </div>
        <Contacts />
        {error && <h2>Error: {error}</h2>}
      </div>
    </>
  );
};

export default ContactsPage;
