import ReactDOM from 'react-dom';

import { BackDropContainer } from '../../styles';

const BackDrop = ({ onclick }) => {
  return ReactDOM.createPortal(
    <BackDropContainer onclick={onclick}></BackDropContainer>,
    document.querySelector('#backdrop-hook')
  );
};

export default BackDrop;
