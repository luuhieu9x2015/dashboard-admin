import React, { ReactElement } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { RibbonIp13ProStyled } from './styled/RibbonIp13ProStyled';

interface Props {}

function RibbonIp13Pro({}: Props): ReactElement {
  return (
    <RibbonIp13ProStyled className="ribbon-ip13pro">
      <div className="ribbon-ip13pro__context">
        <p className="ribbon-ip13pro__title">
          Save on your new iPhone with special carrier deals at Apple.{' '}
          <a href="#" className="ribbon-ip13pro__title-link">
            Find your deal <ArrowForwardIosOutlinedIcon className="ribbon-ip13pro__title-arrow" />
          </a>
        </p>
      </div>
    </RibbonIp13ProStyled>
  );
}

export default RibbonIp13Pro;
