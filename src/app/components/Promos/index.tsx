import React, { ReactElement } from 'react';
import { PromosStyled } from './Styled/PromosStyled';
import Grid from '@mui/material/Grid';
import IPhone13 from './IPhone13';
import AirPods from './AirPods';
import HomePod from './HomePod';
import Watch from './Watch';

interface Props {}

function Promos({}: Props): ReactElement {
  return (
    <PromosStyled className="promos">
      <Grid container spacing={1} >
        <Grid item xs={12} sm={6}>
          <IPhone13 />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AirPods />
        </Grid>
        <Grid item xs={12} sm={6}>
          <HomePod />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Watch />
        </Grid>
      </Grid>
    </PromosStyled>
  );
}

export default Promos;
