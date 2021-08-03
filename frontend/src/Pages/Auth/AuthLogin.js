import MetaData from '../../Components/MetaData';
import LoginForm from '../../Components/Login/Login.comp';

import { EntryPage } from '../../styles';

const Authentication = () => {
  return (
    <>
      <MetaData title="Login Page" />
      <EntryPage>
        <div className="box__login">
          <LoginForm />
        </div>
      </EntryPage>
    </>
  );
};

export default Authentication;
