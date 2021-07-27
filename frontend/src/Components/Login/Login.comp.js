import { useState } from 'react';

import { LoginContainer, Button, LinkRouterDom } from '../../styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    alert(email, password);

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <LoginContainer>
        <h1 className="text__login">Client Login</h1>

        <form autoComplete="off" onSubmit={handleSubmitLogin}>
          <div className="wrapper__inputLabel">
            <div>
              <label>Email:</label>
            </div>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="wrapper__inputLabel">
            <div>
              <label>Password:</label>
            </div>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <br />
          <div>
            <Button
              modifiers={!email && !password ? 'disabled' : 'mediumLogin'}
              type="submit"
              disabled={!email && !password}
            >
              Login
            </Button>
          </div>

          {/* <LinkRouterDom to="/reset">
            <div className="forgot__password_text">
              <i>Forgot Password?</i>
            </div>
          </LinkRouterDom> */}
          <LinkRouterDom to="/register">
            <div className="forgot__password_text">
              <i>Don't have a account ?</i>
            </div>
          </LinkRouterDom>
        </form>
      </LoginContainer>
    </>
  );
};

export default LoginForm;
