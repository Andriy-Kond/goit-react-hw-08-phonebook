import { NavLink } from 'react-router-dom';

import { selectIsToken } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: #578ddd;
  }
`;

export const Navigation = () => {
  const isToken = useSelector(selectIsToken);

  return (
    <div
      style={{
        display: 'flex',

        alignItems: 'center',
        gap: '10px',
      }}
    >
      <StyledNavLink to="/">Home</StyledNavLink>
      {isToken && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </div>
  );
};
