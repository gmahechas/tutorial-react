import React from 'react'
import { Route } from 'react-router-dom';

function RouteWithSubRoutesShared(route: any) {
  return (
    <Route path={route.path} render={props => (<route.component {...props} routes={route.routes} />)} />
  )
}

export default RouteWithSubRoutesShared;
