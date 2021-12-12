import React, { ReactElement } from 'react';
import Navbar from './../Navbar/index';
import { HeaderContentStyled } from './styled/HeaderContentStyled';

interface Props {}

function HeaderContent({}: Props): ReactElement {
  return (
    <HeaderContentStyled className="header-content">
      <Navbar />
    </HeaderContentStyled>
  );
}

export default HeaderContent;
