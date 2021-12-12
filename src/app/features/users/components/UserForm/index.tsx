import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useAppSelector } from 'store/hooks';
import { InputField, RadioGroupField, SelectField } from 'app/components/FormFields';
import { usersModel } from 'models';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface UserFormProps {
  initialValues?: usersModel;
  onSubmit?: (formValues: usersModel) => void;
}

const schema = yup.object().shape({
  username: yup
    .string()
    .required('Tên danh mục không được để trống.'),
    email: yup
    .string()
    .email('Nhập đúng định dạng email')
    .required('Email không được để trống.'),
  
    password: yup
    .string()
    .required('Password không được để trống.'),
});

export default function UserForm({ initialValues, onSubmit }: UserFormProps) {
  const [error, setError] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<usersModel>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: usersModel) => {
    try {
      // Clear previous submission error
      setError('');

      await onSubmit?.(formValues);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="username" control={control} label="User Name" />
        <InputField name="email" control={control} label="Email"/>
        <InputField name="password" control={control} label="Password"/>
        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting && <CircularProgress size={16} color="primary" />}
            &nbsp;Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}
