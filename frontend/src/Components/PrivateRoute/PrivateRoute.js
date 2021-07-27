import { Route, Redirect } from 'react-router-dom';

const isAuth = true;
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !isAuth ? <Redirect to="/" /> : <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
