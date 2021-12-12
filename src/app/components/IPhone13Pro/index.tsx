import React, { ReactElement } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { IPhone13ProStyled } from './styled/IPhone13ProStyled';

interface Props {}

function IPhone13Pro({}: Props): ReactElement {
  return (
    <IPhone13ProStyled className="iphone13pro">
      <div className="iphone13pro__content">
        <h2 className="iphone13pro__headline">iPhone 13 Pro</h2>
        <h3 className="iphone13pro__subhead">Oh. So. Pro.</h3>
        <div className="iphone13pro__link">
          <a href="#" className="link-arrow iphone13pro__link-more">
            Learn more
            <ArrowForwardIosOutlinedIcon className="icon-arrow" />
          </a>
          <a href="#" className="link-arrow iphone13pro__link-buy">
            Buy
            <ArrowForwardIosOutlinedIcon className="icon-arrow" />
          </a>
        </div>
      </div>
      <div className="iphone13pro__image">
        <figure className="iphone13pro__iframe"></figure>
      </div>
    </IPhone13ProStyled>
  );
}

export default IPhone13Pro;
