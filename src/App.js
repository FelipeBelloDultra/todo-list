import React from 'react';

import Home from './pages/Home';

import AppProvider from './hooks';

import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <AppProvider>
        <Home />
      </AppProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
