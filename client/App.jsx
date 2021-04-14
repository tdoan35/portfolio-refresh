import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './components/NavBar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Hero />
    </div>
  )
}

export default App;