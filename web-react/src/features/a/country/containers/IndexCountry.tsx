import React from 'react'
import { Switch } from 'react-router-dom';

import RouteWithSubRoutesShared from 'shared/components/RouteWithSubRoutesShared';

function IndexCountry({ routes }: any) {
  return (
    <div>
      <h2>Countries</h2>
      <Switch>
        {routes.map((route: any, i: number) => (
          <RouteWithSubRoutesShared key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default IndexCountry;
