import React, { ReactElement } from 'react';
import { FooterContentStyled } from './styled/HeaderContentStyled';
import FooterNavigation from './FooterNavigation';
import FooterInfo from './FooterInfo';

interface Props {}

function FooterContent({}: Props): ReactElement {
  return (
    <FooterContentStyled className="footer-content">
      <FooterNavigation />
      <FooterInfo />
    </FooterContentStyled>
  );
}

export default FooterContent;
