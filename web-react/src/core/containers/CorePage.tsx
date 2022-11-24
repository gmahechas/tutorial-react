import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderCore from 'core/components/HeaderCore';
import ContentCore from 'core/components/ContentCore';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function CorePage() {
  return (
    <Router>
      <HeaderCore />
      <ContentCore />
    </Router>
  )
}

export default CorePage;
