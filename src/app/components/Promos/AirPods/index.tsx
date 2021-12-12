import React, { ReactElement } from 'react';
import { AirPodsStyled } from './styled/AirPodsStyled';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

interface Props {}

function AirPods({}: Props): ReactElement {
  return (
    <AirPodsStyled className="promos__item airpods">
      <h4 className="airpods__headline">AirPod</h4>
      <h5 className="airpods__subhead">All-new with Spatial Audio</h5>
      <div className="airpods__link">
        <a href="#" className="link-arrow promos__link promos__more">
          Learn more
          <ArrowForwardIosOutlinedIcon className="icon-arrow promos__arrow" />
        </a>
        <a href="#" className="link-arrow promos__link">
          Buy
          <ArrowForwardIosOutlinedIcon className="icon-arrow promos__arrow" />
        </a>
      </div>
    </AirPodsStyled>
  );
}

export default AirPods;
