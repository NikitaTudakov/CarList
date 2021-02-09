import useTheme  from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(10),
  },
}));

export function PaginationActions ({ count, page, rowsPerPage, onChangePage }) {
  const classes = useStyles1();
  const theme = useTheme();

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };


  return (
    <div className={classes.root}>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </div>
  );
};


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