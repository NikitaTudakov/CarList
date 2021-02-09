import React, { useState, useEffect } from 'react';
import { getCars, removeCar } from '../../api';
import { ModalWindowEdit } from './Modals/ModalWindowEdit';
import { PaginationActions } from '../../helpers';

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


const useStyles2 = makeStyles({
  table: {
    minWidth: 300,
  },
});

export  const List = ({ createOpen }) => {
  const classes = useStyles2();

  const [update, setUpdate] = useState(false)
  const [sorted, setSorted] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [cars, setCars] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [carInfo, setInfo] = useState({})


  useEffect(() => {
    getCars()
    .then(result => setCars(result.cars));
    setUpdate(false)
  }, [update, isOpen, createOpen]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortByBrand = () => {
    if (!sorted) {
      setCars([...cars].sort((car1,car2) => car1.brand.localeCompare(car2.brand)));
    } else {
      setCars([...cars].sort((car1,car2) => car2.brand.localeCompare(car1.brand)));
    }

    setSorted(prev => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: 700, cursor: 'pointer', }} onClick={sortByBrand}>
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
                <IconButton onClick={() => {setOpen(true); setInfo(car)}}>
                  <EditOutlinedIcon style={{color: 'black'}}/>
                </IconButton>
                <IconButton 
                  onClick={() => {
                    removeCar(`api/car/${car.id}`);
                    setUpdate(true)
                  }}
                >
                  <DeleteOutlinedIcon
                    style={{color: 'red'}}
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
        <ModalWindowEdit
          open={isOpen}
          handleClose={handleClose}
          car={carInfo}
          />
      </Table>
    </TableContainer>
  );
};
