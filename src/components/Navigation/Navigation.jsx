import css from './Navigation.module.css';
import { selectIsToken } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { StyledNavLink } from 'components/StyledNavLink';

export const Navigation = () => {
  const isToken = useSelector(selectIsToken);

  return (
    <div className={css.navigationContainer}>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isToken && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </div>
  );
};
