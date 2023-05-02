// ^ З використанням localStorage:
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// імпорт при default-експорті дозволяє називати змінну як завгодно:
import sliceFilterReducer from './phonebook/sliceFilter';
import sliceContactsReducer from './phonebook/sliceContacts';

import {
  persistStore,
  persistReducer,
  // ~ Додаткові константи, щоби позбутись помилки у консолі - необхідні для роботи Redux-Persist
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// Додатковий імпорт згідно документації для роботи з localStorage:
import storage from 'redux-persist/lib/storage';

// Об'єдную кілька редюсерів в один, бо "персистувати" можна лише один
const rootReducer = combineReducers({
  storeFilter: sliceFilterReducer,
  storeContacts: sliceContactsReducer,
});

// Об'являю спеціальне Redux-Persist сховище (спеціальний localStorage):
const persistConfig = {
  key: 'root', // ключ, необхідний для того, щоб можна було створювати декілька таких сховищ (вкладених???)
  storage, // storage: storage, - це storage з імпорту: import storage from 'redux-persist/lib/storage';
  whitelist: ['storeContacts'], // дозволяю зберігати у локальному сховищі тільки storeContacts
};

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    // якісь перевірки для серилізації:
    serializableCheck: {
      // якісь екшени, які будуть ігноруватись:
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

// Глобальний стор Redux виношу у окрему змінну:
const storeRedux = configureStore({
  // "Персистую" загальний (об'єднаний/комбінований) редюсер (rootReducer) і передаю його замість списку редюсерів:
  reducer: persistReducer(persistConfig, rootReducer),

  // ~ Додатковий middleware, щоби позбутись помилки у консолі - необхідно для роботи Redux-Persist
  middleware, // middleware: middleware,
  // Якщо працювати з RTK Query:
  // .concat(contactsRTKQuery.middleware),
});

// Пов'язую створене Redux-Persist сховище з глобальним Redux стором:
export const persister = persistStore(storeRedux); // Маю передати його до компоненту <PersistGate> у кореневому index.js

export default storeRedux;

// ^ Без використання localStorage:
// import { configureStore } from '@reduxjs/toolkit';
// import sliceFilterReducer from './phonebook/sliceFilter';
// import sliceContactsReducer from './phonebook/sliceContacts';

// export default configureStore({
//   reducer: {
//     // Задаємо будь-яке ім'я:
//     storeFilter: sliceFilterReducer,
//     storeContacts: sliceContactsReducer,
//   },
// });

// ! RTK Query:
// // ^ Без використання localStorage:
// import { configureStore } from '@reduxjs/toolkit';
// import sliceFilterReducer from './sliceFilter';
// import { contactsRTKQuery } from './contactsRTKQueryApi';

// // ~ Для RTKQuery в Store передаємо ще один middleware, а редюсер передаємо трохи по-іншому

// export default configureStore({
//   reducer: {
//     // Задаємо будь-яке ім'я, бо був export default:
//     storeFilter: sliceFilterReducer,

//     // Додавання редюсера через RTK Query трохи по-іншому:
//     [contactsRTKQuery.reducerPath]: contactsRTKQuery.reducer,
//   },

//   // Для RTK Query потрібен додатковий middleware:
//   // middleware взагалі є масивом. Тому треба робити concat для того, щоб додати додатковий middleware з RTKQueryApi до цього основного масиву
//   // getDefaultMiddleware - спеціальний метод
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(contactsRTKQuery.middleware),
//   // розпушувати масив не рекомендується, бо деякі компоненти з попередніх трьох middleware, які під капотом можуть втратитись. Тому Redux просить не робити ось так:
//   // middleware: getDefaultMiddleware => [...getDefaultMiddleware(), RTKQueryApi.middleware]
// });
