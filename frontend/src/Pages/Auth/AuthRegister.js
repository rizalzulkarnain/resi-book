import MetaData from '../../Components/MetaData';
import RegisterForm from '../../Components/Register/Register.comp';

import { EntryPage } from '../../styles';

const AuthRegister = () => {
  return (
    <>
      <MetaData title="Register Page" />
      <EntryPage>
        <div className="box__login">
          <RegisterForm />
        </div>
      </EntryPage>
    </>
  );
};

export default AuthRegister;
