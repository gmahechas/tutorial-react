import React from 'react';

const MyContext = React.createContext();

function App() {
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
      <DirectChild />
    </MyContext.Provider>
  );
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

export default App;
