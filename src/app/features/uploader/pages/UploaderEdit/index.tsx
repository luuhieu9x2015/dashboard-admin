import { Box, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { uploaderModel } from 'models';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import uploaderApi from 'api/uploaderApi';
import { uploaderActions, selectUploaderFilter } from '../../uploaderSlice';
import UploaderForm from '../../components/UploaderForm';




export default function CustomersEdit() {
  const history = useHistory();
  const { uploaderId } = useParams<{ uploaderId: string }>();
  const isEdit = Boolean(uploaderId);
  const [uploader, setUploader] = useState<uploaderModel>();
  const filter = useAppSelector(selectUploaderFilter);
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    if (!uploaderId) return;

    // IFFE
    (async () => {
      try {
        const data: uploaderModel = await uploaderApi.getById(uploaderId);
        setUploader(data);
      } catch (error) {
        console.log('Failed to fetch customer details', error);
      }
    })();
  }, [uploaderId]);

  const handleUploaderFormSubmit = async (formValues: uploaderModel) => {
    
    if (isEdit) {
      await uploaderApi.update(formValues);
    } else {
      
      await uploaderApi.add(formValues);
    }

    const newFilter = { ...filter, page: 1 };
    dispatch(uploaderActions.setFilter(newFilter));

    // Toast success
    toast.success('Save img successfully!');

    // Redirect back to uploader list
    history.push('/uploader');
  };

  const initialValues: uploaderModel = {
    title: '',
    img_url: '',
    products: '',
    ...uploader,
  } as uploaderModel;

  return (
    <Box>
      <Link to="/uploader">
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> Back to User list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update User Info' : 'Add New User'}</Typography>
      {(!isEdit || Boolean(uploader)) && (
        <Box mt={3}>
          <UploaderForm initialValues={initialValues} onSubmit={handleUploaderFormSubmit} />
        </Box>
      )}
    </Box>
  );
}