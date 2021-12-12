import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { Box, Button, Paper } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { customersModel } from 'models';
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  table: {},
});

export interface CustomersTableProps {
  customersList: customersModel[];
  onEdit?: (cusotmer: customersModel) => void;
  onRemove?: (cusotmer: customersModel) => void;
}

export default function CustomersTable({ customersList, onEdit, onRemove }: CustomersTableProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<customersModel>();

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = (customer: customersModel) => {
    setSelectedCustomer(customer);
    setOpen(true);
  };

  const handleRemoveConfirm = (customer: customersModel) => {
    onRemove?.(customer);
    setOpen(false);
  };

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="left">User Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Support</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {customersList.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.email}</TableCell>
                <TableCell align="left">{item.phone}</TableCell>
                <TableCell align="left">{item.support}</TableCell>
                <TableCell align="center">
                  <Button size="small" color="primary" onClick={() => onEdit?.(item)}>
                    Edit
                  </Button>

                  <Button size="small" color="secondary" onClick={() => handleRemoveClick(item)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Remove dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Xóa Khách Hàng?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn thực sự muốn xóa khách hàng <h3>{selectedCustomer?.name}</h3>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default" variant="outlined">
            Cancel
          </Button>

          <Button
            onClick={() => handleRemoveConfirm(selectedCustomer as customersModel)}
            color="secondary"
            variant="contained"
            autoFocus
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
