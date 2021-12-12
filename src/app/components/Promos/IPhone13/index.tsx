import LearnBuyLink from 'app/components/LearnBuyLink';
import React, { ReactElement } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { IPhone13Styled } from './styled/IPhone13Styled';

interface Props {}

function IPhone13({}: Props): ReactElement {
  return (
    <IPhone13Styled className="promos__item iphone13">
      <h4 className="iphone13__headline">iPhone 13</h4>
      <h5 className="iphone13__subhead">Your new superpower.</h5>
      <div className="iphone13__link">
        <a href="#" className="link-arrow promos__link promos__more">
          Learn more
          <ArrowForwardIosOutlinedIcon className="icon-arrow promos__arrow" />
        </a>
        <a href="#" className="link-arrow promos__link">
          Buy
          <ArrowForwardIosOutlinedIcon className="icon-arrow promos__arrow" />
        </a>
      </div>
    </IPhone13Styled>
  );
}

export default IPhone13;
