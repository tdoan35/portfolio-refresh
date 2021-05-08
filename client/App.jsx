import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeaturedProj from './components/FeaturedProj';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Hero />
      <FeaturedProj />
    </div>
  )
}

export default App;