import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { createCar } from '../../../api';
import { func } from 'prop-types';



export const ModalWindow = ({ title, buttonName, action, handleClose, open }) => {
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [engineType, setEngineType] = useState('');

  const useStyles = makeStyles((theme) => ({
    modal: {

    },

    paper: {
      position: 'absolute',
      width: 775,
      backgroundColor: theme.palette.background.paper,
      'border-radius': 4,
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));

  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modalForm-title"
      aria-describedby="modalForm-description"
    >
      <form  id="form" onSubmit={e => {
        e.preventDefault(); createCar(brand, model, carNumber, engineType)}}>
        <div className={classes.paper}>
          <div className="form__header">
            <h3>{title}</h3>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>

          <InputLabel htmlFor="brand">Brand</InputLabel>
          <FilledInput id="brand" value={brand} onChange={e => setBrand(e.target.value)}/>
          <InputLabel htmlFor="model">Model</InputLabel>
          <FilledInput id="model" value={model} onChange={e => setModel(e.target.value)}/>
          <InputLabel htmlFor="car-number">Car Number</InputLabel>
          <FilledInput id="car-number" value={carNumber} onChange={e => setCarNumber(e.target.value)}/>
          <InputLabel htmlFor="engine-type">Engine Type</InputLabel>
          <FilledInput id="engine-type" value={engineType} onChange={e => setEngineType(e.target.value)}/>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            {buttonName}
          </Button>
        </div>
      </form>
    </Modal>
  )
}