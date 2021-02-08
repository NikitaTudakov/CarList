import React, { useState } from 'react';
import { List } from '../List';
import { createCar } from '../../api';
import { ModalWindow } from '../List/ModalWindow';
import './ListOfCars.scss';

import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';



export const ListOfCars = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false);
  };

  const hanldeOpen = () => {
    setOpen(true);
  }

  return(
    <Container maxWidth="lg" className='list'>
      <Box className="list__menu">
        <h1 className="list__title">CAR LIST</h1>
        <button className="list__add" onClick={hanldeOpen}>ADD CAR</button>
        <ModalWindow
          open={open}
          title="Add Car"
          buttonName="Save"
          handleClose={handleClose}

        />
      </Box>
      <List />
    </Container>
  )
}