import { Box, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { usersModel } from 'models';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import CategoryForm from '../../components/UserForm';
import usersApi from 'api/usersApi';
import { usersActions, selectUsersFilter } from '../../usersSlice';
import UserForm from '../../components/UserForm';




export default function UserEdit() {
  const history = useHistory();
  const { usersId } = useParams<{ usersId: string }>();
  const isEdit = Boolean(usersId);
  const [user, setUser] = useState<usersModel>();
  const filter = useAppSelector(selectUsersFilter);
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    if (!usersId) return;

    // IFFE
    (async () => {
      try {
        const data: usersModel = await usersApi.getById(usersId);
        data.password = ''
        setUser(data);
      } catch (error) {
        console.log('Failed to fetch user details', error);
      }
    })();
  }, [usersId]);

  const handleUserFormSubmit = async (formValues: usersModel) => {
    
    if (isEdit) {
      await usersApi.update(formValues);
    } else {
      
      await usersApi.add(formValues);
    }

    const newFilter = { ...filter, page: 1 };
    dispatch(usersActions.setFilter(newFilter));

    // Toast success
    toast.success('Save user successfully!');

    // Redirect back to user list
    history.push('/users');
  };

  const initialValues: usersModel = {
    username: '',
    email: '',
    password: '',
    ...user,
  } as usersModel;

  return (
    <Box>
      <Link to="/users">
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> Back to User list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update User Info' : 'Add New User'}</Typography>
      {(!isEdit || Boolean(user)) && (
        <Box mt={3}>
          <UserForm initialValues={initialValues} onSubmit={handleUserFormSubmit} />
        </Box>
      )}
    </Box>
  );
}