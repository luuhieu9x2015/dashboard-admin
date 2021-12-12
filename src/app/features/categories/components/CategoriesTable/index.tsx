import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { Box, Button, Paper } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { categoriesModel } from 'models';
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  table: {},
});

export interface CategoriesTableProps {
  categoriesList: categoriesModel[];
  onEdit?: (users: categoriesModel) => void;
  onRemove?: (users: categoriesModel) => void;
}

export default function CategoriesTable({ categoriesList, onEdit, onRemove }: CategoriesTableProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<categoriesModel>();

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = (categories: categoriesModel) => {
    setSelectedCategory(categories);
    setOpen(true);
  };

  const handleRemoveConfirm = (categories: categoriesModel) => {
    onRemove?.(categories);
    setOpen(false);
  };

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="left">Tên Danh Mục</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {categoriesList.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="left">{item.name}</TableCell>
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
        <DialogTitle id="alert-dialog-title">Xóa Danh Mục?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn thực sự muốn xóa danh mục <h3>{selectedCategory?.name}</h3>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default" variant="outlined">
            Cancel
          </Button>

          <Button
            onClick={() => handleRemoveConfirm(selectedCategory as categoriesModel)}
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
