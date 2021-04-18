import React from 'react';
import { GIVE_CONSENTS, CONSENTS } from 'src/utils/routes';
import NavLink from '../Navlink';
import NavbarContainer from './styles';

const Navbar = () => (
  <NavbarContainer>
    <NavLink text="Give consent" to={GIVE_CONSENTS} />
    <NavLink text="Collected consents" to={CONSENTS} />
  </NavbarContainer>
);

export default Navbar;
