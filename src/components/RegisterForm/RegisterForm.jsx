import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRegister } from 'redux/auth/fetchAuth';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // Записую дані полів інпут у відповідні стейти
  const getInput = ({ target: { name, value } }) => {
    if (name === 'name') {
      setUserName(value);
    } else if (name === 'email') {
      setUserEmail(value);
    } else {
      setUserPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const form = e.currentTarget;

    if (!userName || !userEmail || !userPassword) {
      alert(`Всі поля мають бути заповнені`);
    }

    const isLogged = dispatch(
      fetchRegister({
        name: userName,
        email: userEmail,
        password: userPassword,
        //     name: form.elements.name.value,
        //     email: form.elements.email.value,
        //     password: form.elements.password.value,
      })
    );

    // Якщо помилки не було, то значить новий користувач створений і можна очистити поля
    if (!isLogged.error) {
      setUserName('');
      setUserEmail('');
      setUserPassword('');
      // form.reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          className="form-control me-2"
          // type="search"
          placeholder="Search"
          aria-label="Search"
          type="text"
          name="name"
          onChange={getInput}
          value={userName}
        />
      </label>
      <label className={css.label}>
        Email
        <input
          className="form-control me-2"
          // type="search"
          placeholder="Search"
          aria-label="Search"
          type="email"
          name="email"
          onChange={getInput}
          value={userEmail}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className="form-control me-2"
          // type="search"
          placeholder="Search"
          aria-label="Search"
          type="password"
          name="password"
          onChange={getInput}
          value={userPassword}
        />
      </label>
      <button type="submit" className="btn btn-outline-primary">
        Register
      </button>
    </form>
  );
};
