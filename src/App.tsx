import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import UpcomingShows from './components/UpcomingShows';

function App() {
  return (
    <Box className="App">
      <Box>
          <Hero />
      </Box>
      <UpcomingShows/>
      <Reviews />
    </Box>
  );
}

export default App;
