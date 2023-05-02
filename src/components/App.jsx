import { NavLink, Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout';
import NotFoundPage from './NotFoundPage/NotFoundPage';

import HomePage from 'pages/Home/HomePage';
import RegisterPage from 'pages/Register/RegisterPage';
import LoginPage from 'pages/Login/LoginPage';
import ContactsPage from 'pages/Contacts/ContactsPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/fetchAuth';

// ^ Рефакторінг у Redux

export const App = () => {
  // * Логіка для обробки токена при перезавантаженні сторінки:
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  // */ Логіка для обробки токена при перезавантаженні сторінки:

  // /register - публічний маршрут реєстрації нового користувача з формою
  // /login - публічний маршрут логіна існуючого користувача з формою
  // /contacts - приватний маршрут для роботи зі списком контактів користувача

  // Повертаю розмітку:
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:currentMovie" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes> */}
    </>
  );
};

// ! RTK Query:
// import { UserForm } from './UserForm/UserForm';
// import { Contacts } from './Contacts/Contacts';
// import { Filter } from './Filter/Filter';
// import css from './App.module.css';
// import { PreLoader } from './Preloader/PreLoader';

// // ^ Рефакторінг у RTK Query
// import { useGetContactsQuery } from 'store/contactsRTKQueryApi';

// export const App = () => {
//   // * При використанні RTK Query:
//   // const data = useGetContactsQuery();
//   // console.log('UserForm >> data:', data);
//   const { isLoading, isError: error } = useGetContactsQuery();

//   // Повертаю розмітку:
//   return (
//     <div className={css.mainContainer}>
//       <h1>Phonebook</h1>
//       <UserForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <div style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
//         {isLoading && !error && <PreLoader />}
//       </div>

//       <Contacts />
//       {error && <h2>Error: {error}</h2>}
//     </div>
//   );
// };
