import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Button, Box, Typography } from '@material-ui/core';
import { categoriesModel, ListParams } from 'models';
import { toast } from 'react-toastify';
import { Pagination } from '@material-ui/lab';
import { categoriesActions, selectCategoriesFilter, selectCategoriesList, selectCategoriesPagination } from 'app/features/categories/categoriesSlice';

import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import categoriesApi from 'api/categoriesApi';
import CategoriesTable from '../../components/CategoriesTable';

export default function CategoriesList() {
  const match = useRouteMatch();
  const history = useHistory();
  const pagination = useAppSelector(selectCategoriesPagination);
  const filter = useAppSelector(selectCategoriesFilter);
  const dispatch = useAppDispatch();
  const categoriesList = useAppSelector(selectCategoriesList);

  useEffect(() => {
    dispatch(categoriesActions.fetchCategoriesList(filter));
  }, [dispatch, filter]);


  const handlePageChange = (e: any, page: number) => {
    dispatch(
      categoriesActions.setFilter({
        page: page,
      }),
    );
  };

  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(categoriesActions.setFilterWithDebounce(newFilter));
  };

  
  const handleRemoveCategory = async (category: categoriesModel) => {
    try {
      // Remove category API
      await categoriesApi.remove(category.id);

      toast.success('Remove category successfully!');

      // Trigger to re-fetch student list with current filter
      const newFilter = { ...filter, page: 1 };
      dispatch(categoriesActions.setFilter(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to fetch category', error);
    }
  };

  const handleEditCategory = async (category: categoriesModel) => {
    history.push(`${match.url}/${category.id}/`);
  };

  return (
    <Box>
      <Box>
        <Link to={`${match.url}/add`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Add New Category
          </Button>
        </Link>
      </Box>


      <CategoriesTable
        categoriesList={categoriesList}
        onRemove={handleRemoveCategory}
        onEdit={handleEditCategory}
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
