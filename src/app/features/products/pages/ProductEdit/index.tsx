import { Box, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import productsApi from 'api/productsApi';
import { productsModel } from 'models';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import ProductForm from '../../components/ProductForm';
import { productsActions, selectProductsFilter } from '../../productsSlice';



export default function ProductEdit() {
  const history = useHistory();
  const { productId } = useParams<{ productId: string }>();
  const isEdit = Boolean(productId);
  const [product, setProduct] = useState<productsModel>();
  const filter = useAppSelector(selectProductsFilter);
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    if (!productId) return;

    // IFFE
    (async () => {
      try {
        const data: productsModel = await productsApi.getById(productId);
        setProduct(data);
      } catch (error) {
        console.log('Failed to fetch product details', error);
      }
    })();
  }, [productId]);

  const handleProductFormSubmit = async (formValues: productsModel) => {
    // TODO: Handle submit here, call API  to add/update student
    
    if (isEdit) {
      await productsApi.update(formValues);
    } else {
      
      await productsApi.add(formValues);
    }

    const newFilter = { ...filter, page: 1 };
    dispatch(productsActions.setFilter(newFilter));

    // Toast success
    toast.success('Save student successfully!');

    // Redirect back to student list
    history.push('/products');
  };

  const initialValues: productsModel = {
    name: '',
    price: '',
    promotion: '',
    description: '',
    category: '',
    ...product,
  } as productsModel;

  return (
    <Box>
      <Link to="/">
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> Back to Products list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update Products Info' : 'Add New Products'}</Typography>
      {(!isEdit || Boolean(product)) && (
        <Box mt={3}>
          <ProductForm initialValues={initialValues} onSubmit={handleProductFormSubmit} />
        </Box>
      )}
    </Box>
  );
}