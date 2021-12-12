import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useAppSelector } from 'store/hooks';
import { InputField, RadioGroupField, SelectField } from 'app/components/FormFields';
import { customersModel } from 'models';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface CustomerFormProps {
  initialValues?: customersModel;
  onSubmit?: (formValues: customersModel) => void;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Tên khách hàng không được để trống.'),
    email: yup
    .string()
    .email('Nhập đúng định dạng email')
    .required('Email không được để trống.'),
  
    password: yup
    .string()
    .required('Password không được để trống.'),

    phone: yup
    .number()
    .required('Số điện thoại không được để trống.'),
});

export default function CustomerForm({ initialValues, onSubmit }: CustomerFormProps) {
  const [error, setError] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<customersModel>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: customersModel) => {
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
        <InputField name="name" control={control} label="Tên Khách Hàng" />
        <InputField name="email" control={control} label="Email"/>
        <InputField name="phone" control={control} label="Số Điện Thoại" type="number" />
        <InputField name="support" control={control} label="Support"/>

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
