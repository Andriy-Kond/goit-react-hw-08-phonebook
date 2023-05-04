import { selectIsToken } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

import { StyledNavLink } from 'components/StyledNavLink';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isToken = useSelector(selectIsToken);

  return (
    <div
      className={css.navigationContainer}
      // style={{
      //   display: 'flex',

      //   alignItems: 'center',
      //   gap: '10px',
      // }}
    >
      <StyledNavLink to="/">Home</StyledNavLink>
      {isToken && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </div>
  );
};
