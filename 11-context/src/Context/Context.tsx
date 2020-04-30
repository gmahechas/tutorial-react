import React from 'react';

export const ctxt = React.createContext<Partial<{}>>({
  theme: 'light',
  /* toggleTheme: () => { } */
});
