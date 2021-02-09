import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { createCar} from '../../../../api';

export const ModalWindowCreate = ({ handleClose, open, }) => {
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [engineType, setEngineType] = useState('');
  const [disabled, setDisabled] = useState(true);
  const availableEngineType = ['GAS','FUEL','HYBRID'];

  const reset = () => {
    setModel('');
    setBrand('');
    setCarNumber('');
    setEngineType('');
  };

  const isdisbled = () => {

    if(availableEngineType.includes(engineType)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 775,
    backgroundColor: theme.palette.background.paper,
    'border-radius': 4,
    padding: theme.spacing(3, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    width: '338px',
    margin: theme.spacing(2),
  },

  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(2),
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  'button-main': {
    marginLeft: '10px',
    backgroundColor: '#22B2BE',
    "&:hover": {
      backgroundColor: '#22B2BE',
      opacity: '0.8'
    }
  },
}));

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
          createCar(brand, model, carNumber, engineType);
          reset();
        }}
      >
        <div className={classes.paper}>
          <div className={classes.header}>
            <h3>ADD A NEW CAR</h3>
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
              className={classes.button}
              variant="outlined"
              color="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>

            <Button
              disabled = {disabled}
              className={classes['button-main']}
              variant="contained"
              color="primary"
              type="submit"
            >
              OK
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  )
};
