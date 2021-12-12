import React, { ReactElement } from 'react';
import { HomePodStyled } from './styled/HomePodStyled';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

interface Props {}

function HomePod({}: Props): ReactElement {
  return (
    <HomePodStyled className="promos__item homepod">
      <h4 className="homepod__headline">HomePod mini</h4>
      <div className="homepod__link">
        <a href="#" className="link-arrow promos__link promos__more">
          Learn more
          <ArrowForwardIosOutlinedIcon className="icon-arrow promos__arrow" />
        </a>
        <a href="#" className="link-arrow promos__link">
          Buy
          <ArrowForwardIosOutlinedIcon className="icon-arrow promos__arrow" />
        </a>
      </div>
    </HomePodStyled>
  );
}

export default HomePod;
