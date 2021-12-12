import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Button, Box, Typography } from '@material-ui/core';
import ProductsTable from '../../components/ProductsTable';
import { ListParams, productsModel } from 'models';
import { toast } from 'react-toastify';
import { Pagination } from '@material-ui/lab';
import {
  selectProductsList,
  productsActions,
  selectProductsPagination,
  selectProductsFilter,
} from 'app/features/products/productsSlice';
import ProductsFilters from '../../components/ProductsFilters';
import { categoriesActions, selectCategoriesFilter, selectCategoriesList } from 'app/features/categories/categoriesSlice';
import { uploaderActions, selectUploaderFilter, selectUploaderList } from 'app/features/uploader/uploaderSlice';
import axios from 'axios';
import productsApi from 'api/productsApi';

import { Link, useHistory, useRouteMatch } from 'react-router-dom';

export default function ProductsList() {
  const match = useRouteMatch();
  const history = useHistory();
  const pagination = useAppSelector(selectProductsPagination);
  const filter = useAppSelector(selectProductsFilter);
  const filter_ca = useAppSelector(selectCategoriesFilter);
  const dispatch = useAppDispatch();
  const categoriesList = useAppSelector(selectCategoriesList);
  const productsList = useAppSelector(selectProductsList);

  const uploaderList = useAppSelector(selectUploaderList);
  const filter_uploader = useAppSelector(selectUploaderFilter);



  useEffect(() => {
    dispatch(categoriesActions.fetchCategoriesList(filter_ca));
  }, [dispatch, filter_ca]);


  useEffect(() => {
    dispatch(uploaderActions.fetchUploaderList(filter_uploader));
  }, [dispatch, filter_ca]);
  
  


  useEffect(() => {
    dispatch(productsActions.fetchProductsList(filter));
  }, [dispatch, filter]);

  const handlePageChange = (e: any, page: number) => {
    dispatch(
      productsActions.setFilter({
        page: page,
      }),
    );
  };

  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(productsActions.setFilterWithDebounce(newFilter));
  };

  const handleFilterChange = (newFilter: ListParams) => {
    dispatch(productsActions.setFilter(newFilter));
  };

  const handleRemoveProduct = async (products: productsModel) => {
    try {
      // Remove products API
      await productsApi.remove(products.id);

      toast.success('Remove products successfully!');

      // Trigger to re-fetch student list with current filter
      const newFilter = { ...filter, page: 1 };
      dispatch(productsActions.setFilter(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to fetch products', error);
    }
  };

  const handleEditProduct = async (product: productsModel) => {    
    history.push(`${match.url}/${product.id}`);
  };

  return (
    <Box>
      <Box>

        <Link to={`${match.url}/add`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Add new student
          </Button>
        </Link>
      </Box>

      <Box>
        <ProductsFilters
          filter={filter}
          onSearchChange={handleSearchChange}
          onChange={handleFilterChange}
          categoriesList={categoriesList}
        />
      </Box>

      <ProductsTable
        productsList={productsList}
        onRemove={handleRemoveProduct}
        onEdit={handleEditProduct}
      />
      <Box my={2} display="flex" justifyContent="center">
        <Pagination
          color="primary"
          count={pagination.total_page}
          page={pagination.page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}
