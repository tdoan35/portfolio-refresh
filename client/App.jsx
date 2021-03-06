import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeaturedProj from './components/FeaturedProj';
import Project from './components/Projects';
import Referrals from './components/Referrals';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Hero />
      <FeaturedProj />
      <Project />
      <Referrals />
    </div>
  )
}

export default App;