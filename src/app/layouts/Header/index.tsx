import HeaderContent from 'app/components/Header/HeaderContent';
import React, { ReactElement } from 'react';
import { HeaderStyled } from './HeaderStyled';

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <HeaderStyled className="header">
      <HeaderContent />
    </HeaderStyled>
  );
}

export default Header;
