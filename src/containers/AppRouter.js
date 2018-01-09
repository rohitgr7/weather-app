import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Main from './../components/Main';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';
import Search from './../components/Search';

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/search" component={Search} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default AppRouter;
