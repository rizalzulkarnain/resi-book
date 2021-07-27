import { NavDrawerContainer, LinkRouterDom, Button } from '../../styles';

const NavDrawer = () => {
  return (
    <NavDrawerContainer>
      <ul className="list__navbar">
        <li className="nav__link">
          <LinkRouterDom to="/dashboard">Home</LinkRouterDom>
        </li>

        <li className="nav__link">
          <LinkRouterDom to="/report">Report</LinkRouterDom>
        </li>

        <li className="nav__link">
          <LinkRouterDom to="/about">About</LinkRouterDom>
        </li>

        <div className="auth__register__login">
          <li className="nav__link">
            <LinkRouterDom to="/">
              <Button modifiers="mediumLogout">Logout</Button>
            </LinkRouterDom>
          </li>
        </div>
      </ul>
    </NavDrawerContainer>
  );
};

export default NavDrawer;
