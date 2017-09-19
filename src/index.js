import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';

import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';
import ListItems from './components/list/new-list-item';
import ListShow from './components/list/list-items';
import ListsShow from './components/list/list-show';
import reducers from './reducers';


// import { reduxForm } from 'redux-form';


var createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
        <Route path="signout" component={Signout} />
        <Route path="newitem" component={(ListItems)} />
        <Route path="items" component={RequireAuth(ListShow)} />
        <Route path="items/:id" component={(ListsShow)} />                          
      </Route>
    </Router>
  </Provider>
  ,document.querySelector('.container'));
    

