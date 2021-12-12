import { Box, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { customersModel } from 'models';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import CategoryForm from '../../components/CustomerForm';
import customersApi from 'api/customersApi';
import { customersActions, selectCustomersFilter } from '../../customersSlice';
import CustomerForm from '../../components/CustomerForm';




export default function CustomersEdit() {
  const history = useHistory();
  const { customerId } = useParams<{ customerId: string }>();
  const isEdit = Boolean(customerId);
  const [customer, setCustomer] = useState<customersModel>();
  const filter = useAppSelector(selectCustomersFilter);
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    if (!customerId) return;

    // IFFE
    (async () => {
      try {
        const data: customersModel = await customersApi.getById(customerId);
        setCustomer(data);
      } catch (error) {
        console.log('Failed to fetch customer details', error);
      }
    })();
  }, [customerId]);

  const handleCustomerFormSubmit = async (formValues: customersModel) => {
    
    if (isEdit) {
      await customersApi.update(formValues);
    } else {
      
      await customersApi.add(formValues);
    }

    const newFilter = { ...filter, page: 1 };
    dispatch(customersActions.setFilter(newFilter));

    // Toast success
    toast.success('Save customer successfully!');

    // Redirect back to customer list
    history.push('/customers');
  };

  const initialValues: customersModel = {
    name: '',
    email: '',
    phone: '',
    support: '',
    ...customer,
  } as customersModel;

  return (
    <Box>
      <Link to="/customers">
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> Back to User list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update User Info' : 'Add New User'}</Typography>
      {(!isEdit || Boolean(customer)) && (
        <Box mt={3}>
          <CustomerForm initialValues={initialValues} onSubmit={handleCustomerFormSubmit} />
        </Box>
      )}
    </Box>
  );
}