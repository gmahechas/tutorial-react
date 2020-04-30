import React from 'react';

import { FancyButton } from './FancyButton/FancyButton';

function App() {
  const ref = React.createRef();
  return (
    <div className="App">
      <FancyButton ref={ref}>Click me!</FancyButton>
    </div>
  );
}

export default App;
