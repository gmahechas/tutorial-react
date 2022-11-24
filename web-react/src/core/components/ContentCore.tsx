import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom';

import RouteWithSubRoutesShared from 'shared/components/RouteWithSubRoutesShared';

import routes from 'routes';

function ContentCore() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutesShared key={i} {...route} />
        ))}
      </Switch>
    </Suspense>
  )
}

export default ContentCore;
