import { Box, Grid, Select, MenuItem, Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Search } from '@material-ui/icons';
import { ListParams, categoriesModel, productsModel } from 'models';
import React, { ChangeEvent, useRef } from 'react';

export interface ProductsFiltersProps {
  filter: ListParams;
  categoriesList: categoriesModel[];
  onChange?: (newFilter: ListParams) => void;
  onSearchChange?: (newFilter: ListParams) => void;
}

export default function ProductsFilters({
  filter,
  categoriesList,
  onChange,
  onSearchChange,
}: ProductsFiltersProps) {
  const searchRef = useRef<HTMLInputElement>();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;

    const newFilter: ListParams = {
      ...filter,
      name: e.target.value,
      page: 1,
    };
    onSearchChange(newFilter);
  };

  const handleCategoryChange = (e: ChangeEvent<{ name?: string; value: unknown }>) => {
    if (!onChange) return;

    const newFilter: ListParams = {
      ...filter,
      category: e.target.value || undefined,
      page: 1,
    };

    onChange(newFilter);
  };



  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor="searchByName">Search by name</InputLabel>
            <OutlinedInput
              id="searchByName"
              label="Search by name"
              endAdornment={<Search />}
              defaultValue={filter.name_like}
              onChange={handleSearchChange}
              inputRef={searchRef}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="filterByCategory">Filter by Category</InputLabel>
            <Select
              labelId="filterByCategory"
              value={filter.category || ''}
              onChange={handleCategoryChange}
              label="Filter by Category"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>

              {categoriesList.map((item, index) => (
                <MenuItem value={item.name} key={index}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
