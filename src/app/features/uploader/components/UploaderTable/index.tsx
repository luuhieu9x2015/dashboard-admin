import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { Box, Button, Paper } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { uploaderModel } from 'models';
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  table: {},
});

export interface UploaderTableProps {
  uploaderList: uploaderModel[];
  onEdit?: (uploader: uploaderModel) => void;
  onRemove?: (uploader: uploaderModel) => void;
}

export default function UploaderTable({ uploaderList, onEdit, onRemove }: UploaderTableProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedUploader, setSelectedUploader] = useState<uploaderModel>();

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = (uploader: uploaderModel) => {
    setSelectedUploader(uploader);
    setOpen(true);
  };

  const handleRemoveConfirm = (uploader: uploaderModel) => {
    onRemove?.(uploader);
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
            {uploaderList.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="left">{item.title}</TableCell>
                <TableCell align="left">{item.img_url}</TableCell>
                <TableCell align="left">{item.products}</TableCell>
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
        <DialogTitle id="alert-dialog-title">Xóa Ảnh Sản Phẩm?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn thực sự muốn xóa ảnh <h3>{selectedUploader?.title}</h3>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default" variant="outlined">
            Cancel
          </Button>

          <Button
            onClick={() => handleRemoveConfirm(selectedUploader as uploaderModel)}
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
