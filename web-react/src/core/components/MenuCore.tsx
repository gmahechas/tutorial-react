import React from 'react'
import { Link } from 'react-router-dom';

import { ButtonShared } from 'shared/prime';

function MenuCore() {
  return (
    <div>
      <Link to="/">
        <ButtonShared label="Dashboard" classname="p-button-secondary" />
      </Link>
      <Link to="/country">
        <ButtonShared label="Country" classname="p-button-secondary" />
      </Link>
      <Link to="/estate">
        <ButtonShared label="Estate" classname="p-button-secondary" />
      </Link>
      <Link to="/city">
        <ButtonShared label="City" classname="p-button-secondary" />
      </Link>
    </div>
  )
}

export default MenuCore;
