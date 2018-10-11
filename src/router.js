import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import InBtn from './routes/IndexPage';
import Lists from './routes/List';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={InBtn} />
        <Route path="/List" component={Lists} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
