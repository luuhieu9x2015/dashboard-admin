import { Box, makeStyles } from '@material-ui/core';
import { Sidebar } from 'app/components/common/Sidebar';
import Categories from 'app/features/categories';
import Users from 'app/features/users';
import Products from 'app/features/products';
import Uploader from 'app/features/uploader';

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from 'app/pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '240px 1fr',
    gridTemplateAreas: `"header header" "sidebar main"`,

    minHeight: '100vh',
  },

  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  },
  main: {
    gridArea: 'main',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 3),
  },
}));

export function AdminLayout() {
  console.log('adminlayout')
  const classes = useStyles();

  // For GET requests
  return (
    <Box className={classes.root}>
      <ToastContainer />
      <Box className={classes.header}>{/* <Header /> */}</Box>

      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>

      <Box className={classes.main}>
        <Switch>
          <Route path="/images">
            <Uploader />
          </Route>

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/categories">
            <Categories />
          </Route>

          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

      </Box>
    </Box>
  );
}
