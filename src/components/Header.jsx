import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';

import { UserMenu } from './UserMenu';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        gap: '10px',
        fontSize: '32px',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
