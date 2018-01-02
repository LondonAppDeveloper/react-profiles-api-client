import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './containers/Login';

const Routes = ({ childProps }) => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} props={childProps} />
    </Switch>
  )
}

export default Routes;
