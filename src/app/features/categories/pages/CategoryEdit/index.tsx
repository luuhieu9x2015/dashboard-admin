import { Box, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { categoriesModel } from 'models';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import CategoryForm from '../../components/CategoryForm';
import categoriesApi from 'api/categoriesApi';
import { categoriesActions, selectCategoriesFilter } from '../../categoriesSlice';



export default function CategoryEdit() {
  const history = useHistory();
  const { categoryId } = useParams<{ categoryId: string }>();
  const isEdit = Boolean(categoryId);
  const [category, setCategory] = useState<categoriesModel>();
  const filter = useAppSelector(selectCategoriesFilter);
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    if (!categoryId) return;

    // IFFE
    (async () => {
      try {
        const data: categoriesModel = await categoriesApi.getById(categoryId);
        setCategory(data);
      } catch (error) {
        console.log('Failed to fetch category details', error);
      }
    })();
  }, [categoryId]);

  const handleCategoryFormSubmit = async (formValues: categoriesModel) => {
    
    if (isEdit) {
      await categoriesApi.update(formValues);
    } else {
      
      await categoriesApi.add(formValues);
    }

    const newFilter = { ...filter, page: 1 };
    dispatch(categoriesActions.setFilter(newFilter));

    // Toast success
    toast.success('Save student successfully!');

    // Redirect back to student list
    history.push('/categories');
  };

  const initialValues: categoriesModel = {
    name: '',
    ...category,
  } as categoriesModel;

  return (
    <Box>
      <Link to="/">
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> Back to Category list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update Category Info' : 'Add New Category'}</Typography>
      {(!isEdit || Boolean(category)) && (
        <Box mt={3}>
          <CategoryForm initialValues={initialValues} onSubmit={handleCategoryFormSubmit} />
        </Box>
      )}
    </Box>
  );
}