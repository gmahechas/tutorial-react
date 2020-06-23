import React from 'react';

const MyContext = React.createContext();

const MyProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  const value = {
    theme,
    nextTheme,
    toogleTheme: () => {
      setTheme(nextTheme);
    }
  }

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

function App2() {
  return (
    <MyProvider>
      <DirectChild />
    </MyProvider>
  )
}

const DirectChild = React.memo(() => {
  console.log('DirectChild');
  return <nav><DepperChild /></nav>
});

const DepperChild = () => {
  console.log('DepperChild');
  const { nextTheme, toogleTheme } = React.useContext(MyContext);

  return (
    <div>
      <button onClick={toogleTheme}>{nextTheme}</button>
    </div>
  )
}

export default App2;