import css from './ContactsPage.module.css';
import { SmallPreLoader } from 'components/Preloader/PreLoader';
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
      <div className={css.contactsContainer}>
        <div className={css.contactsItem}>
          <h2>Phonebook</h2>
          <UserForm />
        </div>
        <div className={css.contactsItem}>
          <h2>Contacts</h2>
          <Filter />
        </div>
        <div className={css.contactsItem}>
          <div className={css.contactsPreloader}>
            <p>List of contacts</p>
            <div className={css.preloader}>
              {isLoading && !error && (
                <>
                  <SmallPreLoader /> <SmallPreLoader /> <SmallPreLoader />
                </>
              )}
            </div>
          </div>
          <Contacts />
          {error && <h2>Error: {error}</h2>}
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
