import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { SideDrawerContainer } from '../../styles';

const SideDrawer = ({ onClick, children, show }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <SideDrawerContainer className="side-drawer" onClick={onClick}>
        {children}
      </SideDrawerContainer>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.querySelector('#drawer-hook'));
};

export default SideDrawer;
