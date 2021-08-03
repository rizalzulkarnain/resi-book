import { useState } from 'react';
import MetaData from '../../Components/MetaData';

import { EntryPage, LoginContainer, Button, LinkRouterDom } from '../../styles';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();

    alert(email);

    setEmail('');
  };

  return (
    <>
      <MetaData title="Password Reset Page" />
      <EntryPage>
        <div className="box__login">
          <LoginContainer>
            <h1 className="text__login">Reset Password</h1>

            <form autoComplete="off" onSubmit={handleResetPassword}>
              <div className="wrapper__inputLabel">
                <div>
                  <label>Email:</label>
                </div>
                <input
                  type="password"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <br />
              <div>
                <Button
                  modifiers={!email ? 'disabled' : 'mediumLogin'}
                  type="submit"
                  disabled={!email}
                >
                  Reset Password
                </Button>
              </div>

              <LinkRouterDom to="/">
                <div className="forgot__password_text">Back to Login</div>
              </LinkRouterDom>
            </form>
          </LoginContainer>
        </div>
      </EntryPage>
    </>
  );
};

export default PasswordReset;
