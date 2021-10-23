import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//action
import { loadUser } from './actions/auth';

//components
import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/Landing';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import Alert from './Components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './Components/dashboard/Dashboard';
import ProfileForm from './Components/profile-forms/ProfileForm';
import Experience from './Components/profile-forms/Experience';
import PrivateRoute from './Components/routing/PrivateRoute';
import { LOGOUT } from './actions/types';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />

              <PrivateRoute
                exact
                path='/create-profile'
                component={ProfileForm}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={ProfileForm}
              />
              <PrivateRoute exact path='/experience' component={Experience} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
