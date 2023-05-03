import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsToken } from 'redux/auth/selectors';

// Якщо користувач залогінений, або оновлює сторінку, то кидаю на приватний компонент, інакше - на сторінку логіну (/login)
// ^ Варіант 1
export default function PrivateRoute({ component, redirectTo = '/' }) {
  // const isLogged = useSelector(selectIsLoggedIn);
  const isToken = useSelector(selectIsToken);

  // console.log('PrivateRoute >> props:', props)
  // console.log('PrivateRoute >> isLogged:', isLogged);
  // console.log('PrivateRoute >> isToken:', isToken);
  // console.log('isLogged || isToken :>> ', isLogged || isToken);

  // return isLogged || isToken ? component : <Navigate to={redirectTo} />;
  return isToken ? component : <Navigate to={redirectTo} />;
  // return isLogged ? props.component : <Navigate to={props.redirectTo} />;
}

// ^ Варіант 2
// export default function PrivateRoute({ component }) {
//   // console.log('PrivateRoute >> props:', props)
//   const isLogged = useSelector(selectIsLoggedIn);
//   return isLogged ? component : <Navigate to="/login" />;
// }

// ^ Варіант 3
// export default function PrivateRoute({ children }) {
//   const isLogged = useSelector(selectIsLoggedIn);
//   return isLogged ? children : <Navigate to="/login" />;
// }
