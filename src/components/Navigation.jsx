import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';

const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const Navigation = () => {
  return (
    <nav
      style={{
        display: 'flex',

        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Logo />
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </nav>
  );
};
