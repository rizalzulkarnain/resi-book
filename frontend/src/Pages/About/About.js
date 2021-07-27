import MetaData from '../../Components/MetaData';
import Breadcump from '../../Components/Breadcump/Breadcump';

import { AboutContainer } from '../../styles';

const About = () => {
  return (
    <>
      <MetaData title="About Page" />
      <AboutContainer>
        <Breadcump page="About" />
        <h4>About</h4>

        <p>This About Page</p>
      </AboutContainer>
    </>
  );
};

export default About;
