import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const AuthNav = () => {
  return (
    <div
      style={{
        display: 'flex',

        alignItems: 'center',
        gap: '10px',
      }}
    >
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </div>
  );
};
