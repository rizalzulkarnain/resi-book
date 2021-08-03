import { SiteHeaderDiv, LinkRouterDom, Button } from '../../styles';

const NavLink = () => {
  return (
    <SiteHeaderDiv>
      <div>
        <LinkRouterDom to="/dashboard">Home</LinkRouterDom>
      </div>

      <div>
        <LinkRouterDom to="/report">Report and Analysis</LinkRouterDom>
      </div>

      <div>
        <LinkRouterDom to="/about">About</LinkRouterDom>
      </div>

      <div>
        <LinkRouterDom to="/">
          <Button modifiers="mediumLogout">Logout</Button>
        </LinkRouterDom>
      </div>
    </SiteHeaderDiv>
  );
};

export default NavLink;
