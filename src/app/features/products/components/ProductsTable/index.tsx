import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { Box, Button, Paper } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { productsModel } from 'models';
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  table: {},
});

export interface ProductsTableProps {
  productsList: productsModel[];
  onEdit?: (users: productsModel) => void;
  onRemove?: (users: productsModel) => void;
}

export default function ProductsTable({ productsList, onEdit, onRemove }: ProductsTableProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<productsModel>();

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = (products: productsModel) => {
    setSelectedProduct(products);
    setOpen(true);
  };

  const handleRemoveConfirm = (products: productsModel) => {
    onRemove?.(products);
    setOpen(false);
  };

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="left">Sản Phẩm</TableCell>
              <TableCell align="left">Giá Bán</TableCell>
              <TableCell align="center">Chương Trình Khuyến Mại</TableCell>
              <TableCell align="center">Chi Tiết</TableCell>
              <TableCell align="center">Danh Mục</TableCell>
              {/* <TableCell align="center">Danh mục</TableCell> */}
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productsList.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.price}</TableCell>
                <TableCell align="left">{item.promotion}</TableCell>
                <TableCell align="left">{item.description}</TableCell>
                <TableCell align="left">{item.category}</TableCell>
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
        <DialogTitle id="alert-dialog-title">Xóa Sản Phẩm?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn thực sự muốn xóa sản phẩm <h3>{selectedProduct?.name}</h3>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default" variant="outlined">
            Cancel
          </Button>

          <Button
            onClick={() => handleRemoveConfirm(selectedProduct as productsModel)}
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
