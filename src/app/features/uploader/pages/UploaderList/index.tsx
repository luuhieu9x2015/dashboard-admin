import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Button, Box, Typography } from '@material-ui/core';
import { uploaderModel, ListParams } from 'models';
import { toast } from 'react-toastify';
import { Pagination } from '@material-ui/lab';
import { uploaderActions, selectUploaderFilter, selectUploaderList, selectUploaderPagination } from 'app/features/uploader/uploaderSlice';

import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import customersApi from 'api/customersApi';
import UploaderTable from '../../components/UploaderTable';

export default function UploaderList() {
  const match = useRouteMatch();
  const history = useHistory();
  const pagination = useAppSelector(selectUploaderPagination);
  const filter = useAppSelector(selectUploaderFilter);
  const dispatch = useAppDispatch();
  const uploaderList = useAppSelector(selectUploaderList);

  useEffect(() => {
    dispatch(uploaderActions.fetchUploaderList(filter));
  }, [dispatch, filter]);


  const handlePageChange = (e: any, page: number) => {
    dispatch(
      uploaderActions.setFilter({
        page: page,
      }),
    );
  };

  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(uploaderActions.setFilterWithDebounce(newFilter));
  };

  
  const handleRemoveUploader = async (customer: uploaderModel) => {
    try {
      // Remove user API
      await customersApi.remove(customer.id);

      toast.success('Remove uploader successfully!');

      // Trigger to re-fetch student list with current filter
      const newFilter = { ...filter, page: 1 };
      dispatch(uploaderActions.setFilter(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to fetch uploader', error);
    }
  };

  const handleEditUploader = async (customer: uploaderModel) => {
    history.push(`${match.url}/${customer.id}/`);
  };

  return (
    <Box>
      <Box>
        <Link to={`${match.url}/add`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Add New Img
          </Button>
        </Link>
      </Box>


      <UploaderTable
        uploaderList={uploaderList}
        onRemove={handleRemoveUploader}
        onEdit={handleEditUploader}
      />
      <Box my={2} display="flex" justifyContent="center">
        <Pagination
          color="primary"
          count={pagination.total_page}
          page={pagination.page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}