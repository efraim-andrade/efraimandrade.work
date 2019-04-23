import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import Home from './pages/Home/index';

import GlobalStyle from './styles';
import './styles/fonts.css';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-138749706-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <GlobalStyle />

      <Home />
    </>
  );
}

export default App;
