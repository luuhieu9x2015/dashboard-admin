import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Button, Box, Typography } from '@material-ui/core';
import { usersModel, ListParams } from 'models';
import { toast } from 'react-toastify';
import { Pagination } from '@material-ui/lab';
import { usersActions, selectUsersFilter, selectUsersList, selectUsersPagination } from 'app/features/users/usersSlice';

import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import usersApi from 'api/usersApi';
import UsersTable from '../../components/UsersTable';

export default function UsersList() {
  const match = useRouteMatch();
  const history = useHistory();
  const pagination = useAppSelector(selectUsersPagination);
  const filter = useAppSelector(selectUsersFilter);
  const dispatch = useAppDispatch();
  const usersList = useAppSelector(selectUsersList);

  useEffect(() => {
    dispatch(usersActions.fetchUsersList(filter));
  }, [dispatch, filter]);


  const handlePageChange = (e: any, page: number) => {
    dispatch(
      usersActions.setFilter({
        page: page,
      }),
    );
  };

  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(usersActions.setFilterWithDebounce(newFilter));
  };

  
  const handleRemoveUser = async (user: usersModel) => {
    try {
      // Remove user API
      await usersApi.remove(user.id);

      toast.success('Remove user successfully!');

      // Trigger to re-fetch student list with current filter
      const newFilter = { ...filter, page: 1 };
      dispatch(usersActions.setFilter(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to fetch user', error);
    }
  };

  const handleEditUser = async (user: usersModel) => {
    history.push(`${match.url}/${user.id}/`);
  };

  return (
    <Box>
      <Box>
        <Link to={`${match.url}/add`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Add New User
          </Button>
        </Link>
      </Box>


      <UsersTable
        usersList={usersList}
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