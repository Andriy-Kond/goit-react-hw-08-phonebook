import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import './index.css';

// Для підключення Redux треба огорнути застосунок у Provider:
import { Provider } from 'react-redux';
// Provider приймайє store, тому маємо його теж імпортувати:
import storeRedux, { persister } from './redux/indexStore';
import { PreLoader } from 'components/Preloader/PreLoader';
import { PersistGate } from 'redux-persist/integration/react';

// Дістати зі стору будь-яке значення - хук useSelector
// Для виконання якоїсь дії стору - хук useDispatch

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Огортаємо App в Provider, щоби у App був доступ до store */}
    <Provider store={storeRedux}>
      {/* Огортаємо App в PersistGate для роботи з localStorage */}
      <PersistGate loading={<PreLoader />} persistor={persister}>
        {/* basename="/goit-react-hw-05-movies" - необхідно для збиральника проєкту */}
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// Маршрутизація
// Додай маршрутизацію з бібліотекою React Router. У програмі має бути кілька сторінок:
// /register - публічний маршрут реєстрації нового користувача з формою
// /login - публічний маршрут логіна існуючого користувача з формою
// /contacts - приватний маршрут для роботи зі списком контактів користувача
// Додай компонент навігації Navigation з посиланнями для переходу по маршрутах.

// Меню користувача
// Створи компонент UserMenu, що відображає пошту користувача і кнопку виходу з облікового запису. Ось як може виглядати його розмітка.
// <div>
//   <p>mango@mail.com</p>
//   <button>Logout</button>
// </div>
