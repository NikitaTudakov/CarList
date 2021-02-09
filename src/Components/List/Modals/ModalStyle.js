import makeStyles from '@material-ui/core/styles/makeStyles';

export  const useStyles = makeStyles((theme) => ({
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