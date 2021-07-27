import { useState } from 'react';

import { LoginContainer, Button, LinkRouterDom } from '../../styles';

const LoginForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    alert(fullName, email, password, confirmPassword);
  };

  return (
    <>
      <LoginContainer>
        <h1 className="text__login">Client Register</h1>

        <form autoComplete="off" onSubmit={handleSubmitLogin}>
          <div className="wrapper__inputLabel">
            <div>
              <label>FullName:</label>
            </div>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>

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

          <div className="wrapper__inputLabel">
            <div>
              <label>Confirm Password:</label>
            </div>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <br />
          <div>
            <Button
              modifiers={!email && !password ? 'disabled' : 'mediumLogin'}
              type="submit"
              disabled={!email && !password}
            >
              Register
            </Button>
          </div>
        </form>

        <LinkRouterDom to="/">
          <div className="forgot__password_text">Back to Login</div>
        </LinkRouterDom>
      </LoginContainer>
    </>
  );
};

export default LoginForm;
