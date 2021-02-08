import React, { useState, useEffect } from 'react';
import { getCars, removeCar } from '../../api';
import PropTypes from 'prop-types';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead  from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import useTheme  from '@material-ui/core/styles/useTheme';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(10),
  },
}));

function PaginationActions (props) {
  const classes = useStyles1();
  const theme = useTheme();

  const { count, page, rowsPerPage, onChangePage } = props;


  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };


  return (
    <div className={classes.root}>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </div>
  );
}

PaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};






const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export  const List = () => {
  const classes = useStyles2();
  const [update, setUpdate] = useState(false)
  const [page, setPage] = useState(0);
  const [cars, setCars] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    getCars()
    .then(result => setCars(result.cars));
    setUpdate(false)
  }, [update])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: 700 }}>
              Brand
            </TableCell>
            <TableCell style={{fontWeight: 700 }}>
              Car Number
            </TableCell>
            <TableCell style={{ fontWeight: 700 }}>
              Engine Type
            </TableCell>
            <TableCell style={{ fontWeight: 700 }}>
              Model
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 700 }} align="right">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? cars.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : cars
          ).map((car) => (
            <TableRow key={car.id}>
              <TableCell component="th" scope="row">
                {car.brand}
              </TableCell>
              <TableCell>
                {car.carNumber}
              </TableCell>
              <TableCell >
                {car.engineType}
              </TableCell>
              <TableCell >
                {car.model}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <IconButton>
                  <EditOutlinedIcon style={{color: 'black'}}/>
                </IconButton>
                <IconButton>
                  <DeleteOutlinedIcon
                    style={{color: 'red'}}
                    onClick={() => {
                      removeCar(`api/car/${car.id}`);
                      setUpdate(true)
                    }}
                  />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={5}
              count={cars.length}
              rowsPerPage={rowsPerPage}
              page={page}

              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={PaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
