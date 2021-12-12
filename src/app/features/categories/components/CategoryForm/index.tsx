import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useAppSelector } from 'store/hooks';
import { InputField, RadioGroupField, SelectField } from 'app/components/FormFields';
import { categoriesModel } from 'models';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface CategoryFormProps {
  initialValues?: categoriesModel;
  onSubmit?: (formValues: categoriesModel) => void;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Tên danh mục không được để trống.'),
});

export default function CategoryForm({ initialValues, onSubmit }: CategoryFormProps) {
  const [error, setError] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<categoriesModel>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: categoriesModel) => {
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
        <InputField name="name" control={control} label="Tên Danh Mục" />
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
