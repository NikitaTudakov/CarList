import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { editCar } from '../../../api';
import {useStyles} from '../../../helpers';

import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


export const ModalWindowEdit = ({ handleClose, open, car }) => {
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [engineType, setEngineType] = useState('');
  const [disabled, setDisabled] = useState(false);
  const availableEngineType = ['FUEL', 'GAS', 'HYBRID'];


  useEffect(() => {
    setModel(car.model);
    setBrand(car.brand);
    setCarNumber(car.carNumber);
    setEngineType(car.engineType);
  },[open]);

  const isdisbled = () => {

    if(availableEngineType.includes(engineType)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    console.log('work')
  };

  const classes = useStyles();



  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <form
        onSubmit={e => {
          e.preventDefault();
          handleClose();
          editCar(car.id, {
            brand,
            carNumber,
            engineType,
            model,
          });
        }}
      >
        <div className={classes.paper}>
          <div className={classes.header}>
            <h3>EDIT CAR INFORMATION</h3>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className={classes.body}>
            <TextField
              required
              label="Brand"
              variant="filled"
              className={classes.textField}
              value={brand}
              onChange={e => setBrand(e.target.value)}
            />
            <TextField
              required
              label="Model"
              variant="filled"
              className={classes.textField}
              value={model}
              onChange={e => setModel(e.target.value)}
            />
            <TextField
              required
              label="Car number"
              variant="filled"
              className={classes.textField}
              value={carNumber}
              onChange={e => setCarNumber(e.target.value)}
            />
            <TextField
              onBlur = {() => isdisbled()}
              helperText={!availableEngineType.includes(engineType) ? 'Please, choose GAS or FUEL or HYBRID' : ' '}
              label="Engine Type"
              variant="filled"
              className={classes.textField}
              value={engineType}
              onChange={e => setEngineType(e.target.value)}
            />
          </div>

          <div className={classes.footer}>
            <Button
              required
              className={classes.button}
              variant="outlined"
              color="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>

            <Button
              disabled={disabled}
              className={classes['button-main']}
              variant="contained"
              color="primary"
              type="submit"
            >
              SAVE
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  )
};
