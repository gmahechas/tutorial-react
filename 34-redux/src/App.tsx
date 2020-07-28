import React from 'react'
import { Router, RouteComponentProps, Link } from '@reach/router'

import { SerieStore } from './serie/store/SerieStore';
import Serie from './serie/Serie';
import Home from './home/Home';
import Fav from './serie/Fav';

const RouterPage = (props: { component: JSX.Element } & RouteComponentProps) => props.component;

function App() {

  return (
    <div>
      <Link to="/">Home</Link> |{" "}
      <Link to="series">Series</Link> |{" "}
      <Link to="faves">Favourite(s)</Link>
      <SerieStore>
        <Router>
          <RouterPage component={<Home />} path='/' />
          <RouterPage component={<Serie />} path='series' />
          <RouterPage component={<Fav />} path='faves' />
        </Router>
      </SerieStore>
    </div>
  )
}

export default App;
