import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.module.css';

const Menu = () => {
  return (
    <ul id='menu'>
      <li>
        <Link to='/one'>One</Link>
      </li>
      <li>|</li>
      <li>
        <Link to='/two'>Two</Link>
      </li>
      <li>|</li>
      <li>
        <Link to='/three'>Three</Link>
      </li>
    </ul>
  );
};

export default Menu;
