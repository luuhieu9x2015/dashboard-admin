import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useAppSelector } from 'store/hooks';
import { InputField, RadioGroupField, SelectField } from 'app/components/FormFields';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import {
  selectCategoriesOptions,
  selectCategoriesList,
} from 'app/features/categories/categoriesSlice';
import { productsModel } from 'models';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { selectUploaderList, selectUploaderOptions, uploaderActions } from 'app/features/uploader/uploaderSlice';

export interface ProductFormProps {
  initialValues?: productsModel;
  onSubmit?: (formValues: productsModel) => void;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Tên sản phẩm không được để trống.'),

  price: yup.number().required('Giá không được để trống.'),

  promotion: yup
    .string()
    .required('Khuyến mại không được để trống.')
    .typeError('Please enter a valid number.'),
  description: yup.string().required('Mô tả sản phẩm không được để trống.'),
  img_profile: yup.string().required('Ảnh đại diện sản phẩm không được để trống.'),
  category: yup.number().required('Vui lòng chọn danh mục.'),
});

export default function ProductForm({ initialValues, onSubmit }: ProductFormProps) {
  const categoriesOptions = useAppSelector(selectCategoriesOptions);
  const selectUploaders = useAppSelector(selectUploaderOptions);
  const [error, setError] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<productsModel>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: productsModel) => {
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
        <InputField name="name" control={control} label="Tên Sản Phẩm" />
        <Box sx={{ mt: 0.5 }} />
        <InputField name="price" control={control} label="Giá" type="number" />
        <Box sx={{ mt: 0.5 }} />
        <InputField name="promotion" control={control} label="Khuyến Mại" />
        <Box sx={{ mt: 0.5 }} />
        <InputField name="description" control={control} label="Chi Tiết Sản Phẩm" />
        <Box sx={{ mt: 0.5 }} />
        <InputField name="img_profile" control={control} label="Ảnh Đại Diện" />
        {/* <Box sx={{ mt: 0.5 }} /> */}
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={selectUploaders}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                loading="lazy"
                width="30"
                src={option.img_url}
                srcSet={`${option.img_url} 3x`}
                alt=""
              />
              {option.label}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Image"
              name="img_profile" control={control}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
        <Box sx={{ mt: 0.5 }} />
        <Autocomplete
          id="country-select-demo"
          multiple
          sx={{ width: 300 }}
          options={selectUploaders}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                loading="lazy"
                width="30"
                src={option.img_url}
                srcSet={`${option.img_url} 3x`}
                alt=""
              />
              {option.label}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Thư viện ảnh"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
        {Array.isArray(categoriesOptions) && categoriesOptions.length > 0 && (
          <SelectField name="category" control={control} label="Categories" options={categoriesOptions} />
        )}
        {/* start autocomplete */}

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
