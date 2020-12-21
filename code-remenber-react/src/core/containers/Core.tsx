import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from '../components/menu/Menu';

const One = lazy(() => import('../../modules/one/One'));
const Two = lazy(() => import('../../modules/two/Two'));
const Three = lazy(() => import('../../modules/three/Three'));

function Core() {
  return (
    <BrowserRouter>
      <Menu />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/three'>
            <Three />
          </Route>
          <Route path='/two'>
            <Two />
          </Route>
          <Route path='/'>
            <One />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Core;
