import React, { ReactElement } from 'react';
import { MainStoreStyled } from './MainStoreStyled';
// import Components
import Products from '../../features/products';
import { AdminLayout } from '../Dashboard';

interface Props {}

function MainStore({}: Props): ReactElement {
  return (
    <MainStoreStyled className="main">
      <AdminLayout />
    </MainStoreStyled>
  );
}

export default MainStore;
