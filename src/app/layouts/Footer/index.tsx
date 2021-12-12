import React, { ReactElement } from 'react';
import FooterContent from 'app/components/FooterContent';
import { FooterStyled } from './FooterStyled';

interface Props {}

function Footer({}: Props): ReactElement {
  return (
    <FooterStyled className="footer-global">
      <FooterContent />
    </FooterStyled>
  );
}

export default Footer;
