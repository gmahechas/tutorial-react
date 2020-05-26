import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = lazy(() => import('./../Modules/Home'));
const Users = lazy(() => import('./../Modules/Users'));
const About = lazy(() => import('./../Modules/About'));

export default function Lazy() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users" component={Users} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}
