import React, { ReactElement } from 'react';
import { WatchStyled } from './styled/WatchStyled';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

interface Props {}

function Watch({}: Props): ReactElement {
  return (
    <WatchStyled className="promos__item watch">
      <span className="watch__title">New</span>
      <h4 className="watch__headline"></h4>
      <div className="watch__link">
        <a href="#" className="link-arrow promos__link promos__more">
          Learn more
          <ArrowForwardIosOutlinedIcon className="icon-arrow promos__arrow" />
        </a>
        <a href="#" className="link-arrow promos__link">
          Buy
          <ArrowForwardIosOutlinedIcon className="icon-arrow promos__arrow" />
        </a>
      </div>
    </WatchStyled>
  );
}

export default Watch;
