import { useState } from 'react';
import BackDrop from './BackDrop';
import SideDrawer from './SideDrawer';
import NavLink from './NavLink';
import NavDrawer from './NavDrawer';

import { LinkRouterDom, SiteHeader, HeaderMain } from '../../styles';

import Logo from '../../Assets/logo-resi-system.svg';

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      {drawerIsOpen && <BackDrop onClick={() => setDrawerIsOpen(false)} />}
      <SideDrawer show={drawerIsOpen} onClick={() => setDrawerIsOpen(false)}>
        <NavDrawer />
      </SideDrawer>

      <HeaderMain>
        <SiteHeader>
          <button
            className="main-navigation__menu-btn"
            onClick={() => setDrawerIsOpen(true)}
          >
            <span className="main-navigation__menu-btn__span" />
            <span className="main-navigation__menu-btn__span" />
            <span className="main-navigation__menu-btn__span" />
          </button>

          <div className="resi__image__div">
            <LinkRouterDom to="/">
              <img className="resi__image" src={Logo} alt="Logo" />
            </LinkRouterDom>
          </div>

          <nav className="main-navigation__header-nav">
            <NavLink />
          </nav>
        </SiteHeader>
      </HeaderMain>
    </>
  );
};

export default Header;
