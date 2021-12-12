import React, { ReactElement } from 'react';
import { LearnBuyLinkStyled } from './styled/LearnBuyLinkStyled';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

interface Props {}

function LearnBuyLink({}: Props): ReactElement {
  return (
    <LearnBuyLinkStyled className="learnbuylink">
      <a href="#" className="link-arrow learnbuylink__arrow learnbuylink__more">
        Learn more
        <ArrowForwardIosOutlinedIcon className="icon-arrow" />
      </a>
      <a href="#" className="link-arrow learnbuylink__arrow">
        Buy
        <ArrowForwardIosOutlinedIcon className="icon-arrow" />
      </a>
    </LearnBuyLinkStyled>
  );
}

export default LearnBuyLink;
