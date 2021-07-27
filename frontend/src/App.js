import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AuthLogin from './Pages/Auth/AuthLogin';
import AuthRegister from './Pages/Auth/AuthRegister';
import PasswordReset from './Pages/Auth/PasswordReset';
import Layout from './Components/Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import NewResi from './Pages/NewResi/NewResi';
import Resi from './Pages/Resi/Resi';
import UpdateResi from './Pages/UpdateResi/UpdateResi';
import About from './Pages/About/About';
import Report from './Pages/Report/Report';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import { GlobalStyle } from './styles';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={AuthLogin} />
          <Route path="/register" component={AuthRegister} />
          <Route path="/reset" component={PasswordReset} />
          <Layout>
            <PrivateRoute path="/dashboard" new component={Dashboard} />
            <PrivateRoute path="/new" component={NewResi} />
            <PrivateRoute path="/resi/:id" component={Resi} />
            <PrivateRoute path="/update/:id" component={UpdateResi} />
            <PrivateRoute path="/about" component={About} />
            <PrivateRoute path="/report" component={Report} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
};

export default App;
