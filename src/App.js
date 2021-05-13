import React from 'react';

import Home from './pages/home';
import {ResultProvider} from './Context/ResultContext';
import Default from './styles/default';


function App() {
  return (
    <ResultProvider>
      <Default />
      <Home />
    </ResultProvider>
  );
}

export default App;
