import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { Box, Button, Paper } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { usersModel } from 'models';
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  table: {},
});

export interface UsersTableProps {
  usersList: usersModel[];
  onEdit?: (users: usersModel) => void;
  onRemove?: (users: usersModel) => void;
}

export default function UsersTable({ usersList, onEdit, onRemove }: UsersTableProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<usersModel>();

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = (users: usersModel) => {
    setSelectedUser(users);
    setOpen(true);
  };

  const handleRemoveConfirm = (users: usersModel) => {
    onRemove?.(users);
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
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {usersList.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="left">{item.username}</TableCell>
                <TableCell align="left">{item.email}</TableCell>
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
        <DialogTitle id="alert-dialog-title">Xóa Thành Viên?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn thực sự muốn xóa thành viên <h3>{selectedUser?.username}</h3>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default" variant="outlined">
            Cancel
          </Button>

          <Button
            onClick={() => handleRemoveConfirm(selectedUser as usersModel)}
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
