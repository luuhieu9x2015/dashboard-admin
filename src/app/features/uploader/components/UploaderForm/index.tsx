import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useAppSelector } from 'store/hooks';
import { InputField, RadioGroupField, SelectField } from 'app/components/FormFields';
import { uploaderModel } from 'models';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface UploaderFormProps {
  initialValues?: uploaderModel;
  onSubmit?: (formValues: uploaderModel) => void;
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

export default function UploaderForm({ initialValues, onSubmit }: UploaderFormProps) {
  const [error, setError] = useState<string>('');
  const inputFileStyle = {
    display: 'none'
  }
  const imageFileStyle = {
    maxHeight: '240px',
    width: 'auto'
  }
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<uploaderModel>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: uploaderModel) => {
    try {
      // Clear previous submission error
      setError('');

      await onSubmit?.(formValues);
    } catch (error) {
      // setError(error.message);
    }
  };

  const onSelectUploadFile = () => {
    document.getElementById('fileInput')?.click()
  }
  const fileRef = React.useRef<HTMLInputElement>(null);
  const onUploadFile = () => {
    console.log()
    var files = fileRef.current!.files
    if (files) {
      var file = files[0]
      if (file) {
        (document.getElementById('img-preview') as HTMLImageElement)!.src = URL.createObjectURL(file)
      }
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="title" control={control} label="Tiêu Đề" />

        <Button type="button" variant="contained" color="primary" onClick={onSelectUploadFile} disabled={isSubmitting}>
          {isSubmitting && <CircularProgress size={16} color="primary" />}
          &nbsp;Upload file
        </Button>
        <Box sx={{ mt: 2 }} />
        <input type="file" id="fileInput" style={inputFileStyle} ref={fileRef} onChange={onUploadFile} />
        <img id="img-preview" style={imageFileStyle} src="/preview-image.jpg" />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting && <CircularProgress size={16} color="primary" />}
            &nbsp;Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}
