import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Button, Box, Typography } from '@material-ui/core';
import { customersModel, ListParams } from 'models';
import { toast } from 'react-toastify';
import { Pagination } from '@material-ui/lab';
import { customersActions, selectCustomersFilter, selectCustomersList, selectCustomersPagination } from 'app/features/customers/customersSlice';

import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import customersApi from 'api/customersApi';
import CustomersTable from '../../components/CustomersTable';

export default function CustomersList() {
  const match = useRouteMatch();
  const history = useHistory();
  const pagination = useAppSelector(selectCustomersPagination);
  const filter = useAppSelector(selectCustomersFilter);
  const dispatch = useAppDispatch();
  const customersList = useAppSelector(selectCustomersList);

  useEffect(() => {
    dispatch(customersActions.fetchCustomersList(filter));
  }, [dispatch, filter]);


  const handlePageChange = (e: any, page: number) => {
    dispatch(
      customersActions.setFilter({
        page: page,
      }),
    );
  };

  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(customersActions.setFilterWithDebounce(newFilter));
  };

  
  const handleRemoveUser = async (customer: customersModel) => {
    try {
      // Remove user API
      await customersApi.remove(customer.id);

      toast.success('Remove customer successfully!');

      // Trigger to re-fetch student list with current filter
      const newFilter = { ...filter, page: 1 };
      dispatch(customersActions.setFilter(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to fetch customer', error);
    }
  };

  const handleEditUser = async (customer: customersModel) => {
    history.push(`${match.url}/${customer.id}/`);
  };

  return (
    <Box>
      <Box>
        <Link to={`${match.url}/add`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Add New Customer
          </Button>
        </Link>
      </Box>


      <CustomersTable
        customersList={customersList}
        onRemove={handleRemoveUser}
        onEdit={handleEditUser}
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