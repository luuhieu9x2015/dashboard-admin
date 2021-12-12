import React, { ReactElement } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { GiftStyled } from './styled/GiftStyled';

interface Props {}

function Gift({}: Props): ReactElement {
  return (
    <GiftStyled className="gift">
      <div className="gift__content">
        <figure className="gift__icon-apple-gift"></figure>
        <h2 className="gift__title">Let the holidays be for everyone.</h2>
        <div className="gift__link">
          <a href="#" className="link-arrow gift__link-arrow">
            Shop gifts
          </a>
          <ArrowForwardIosOutlinedIcon className="icon-arrow gift__icon-arrow" />
        </div>
      </div>
      <div className="gift__gallery">
        <div className="gift__image-item">
          <figure className="gift__image gift__img-macbook"></figure>
        </div>
        <div className="gift__image-item">
          <figure className="gift__image gift__img-iphone"></figure>
        </div>
        <div className="gift__image-item">
          <figure className="gift__image gift__img-ipadmini"></figure>
        </div>
      </div>
    </GiftStyled>
  );
}

export default Gift;
