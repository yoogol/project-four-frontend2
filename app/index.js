import React from 'react';
import auth from './utils/auth';
import ajaxHelpers from './utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';
import ViewClothes from './components/ViewClothes';
import AddNewForm from './components/AddNewForm';
import AboutApp from './components/AboutApp';
import ProfileInfo from './components/ProfileInfo';
import Settings from './components/Settings';
import NoMatch from './components/NoMatch';
import TypeFilter from './components/TypeFilter';
import ColorFilter from './components/ColorFilter';
import TimeFilter from './components/TimeFilter';
import MyHistory from './components/MyHistory';

function requireAuth(nextState, replace) {
  // if (!auth.loggedIn()) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    });
  // }
};

      // <IndexRoute component={ViewClothes} onEnter={requireAuth}/>\
      // <Route path="/signin" component={Login}  />
      // <Route path="/signup" component={Signup} />

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/signin" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/" component={App}>
      <IndexRoute component={ViewClothes} onEnter={requireAuth}/>
        <Route path='/ViewClothes/:filter' component={ViewClothes}/>
      <Route path="/addnew" component={AddNewForm} />
      <Route path="/about" component={AboutApp} />
      <Route path="/viewclothes" component={ViewClothes}/>
      <Route path="/profile" component={ProfileInfo}/>
      <Route path="/myhistory" component={MyHistory}/>
      <Route path="/settings" component={Settings} />
      <Route path="/type-filter" component={TypeFilter} />
      <Route path="/color-filter" component={ColorFilter} />
      <Route path="/time-filter" component={TimeFilter} />

    </Route>
  </Router>
),document.getElementById('app'));
