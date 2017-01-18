import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppRoutes from './components/App/AppRoutes';
import App from './components/App/App';
import Asks from './components/Asks/index'

export default(
  <Route path="/" component={AppRoutes}>
    <Route path="/" component={App} />
    <Route path="/asks" component={Asks} />
    {/*
    <Route path="" component={} />
    <Route path="" component={} />
    */}
  </Route>
)
