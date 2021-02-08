import { Box, Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { ListOfCars } from './Components/ListOfCars';

function App() {
  return (
    <Box>
      <Header />
      <ListOfCars />

    </Box>
  )
}

export default App;
