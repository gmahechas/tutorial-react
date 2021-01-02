import React, { FC } from 'react';

import Header from './Header';

interface IProps {}
const App: FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default App;
