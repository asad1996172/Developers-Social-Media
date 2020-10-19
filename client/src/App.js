import React, { Fragment } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import { Login } from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// fragment is just a ghost element that doesn't show up in DOM
const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing}></Route>
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
