import { LoginForm } from 'components/LoginForm/LoginForm';
const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;

// // src/pages/Login.jsx;
// import { useNavigate } from 'react-router-dom';

// export const Login = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async values => {
//     const response = await FakeAPI.login(values);
//     if (response.success) {
//       navigate('/profile', { replace: true });
//     }
//   };
// // Другий, необов'язковий аргумент функції navigate (об'єкт параметрів) має властивість replace (за замовчуванням false), яка контролює як буде додано новий запис на стек історії. За замовчуванням буде звичайний стек. Якщо вказати значення true, то новий запис підмінить собою найвищий. Це використовується досить рідко, наприклад при логіні, щоб користувач не зміг повернутися кнопкою «назад» на сторінку логіна після входу, адже він уже в системі і робити йому там нічого.
//   return (
//     <div>
//       <h1>Login page</h1>
//       <LoginForm onSubmit={handleSubmit} />
//     </div>
//   );
// };
