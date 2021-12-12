import React, { ReactElement } from 'react';
import { MainHomeStyled } from './MainHomeStyled';

import Holiday from 'app/components/Holiday';
import Gift from 'app/components/Gift';
import IPhone13Pro from 'app/components/IPhone13Pro';
import Promos from 'app/components/Promos';

interface Props {}

function MainHome({}: Props): ReactElement {
  return (
    <MainHomeStyled className="main">
      <Holiday />
      <Gift />
      <IPhone13Pro />
      <Promos />
    </MainHomeStyled>
  );
}

export default MainHome;
