import React, { ReactElement } from 'react';
import { FooterInfoStyled } from './styled/FooterInfoStyled';

interface Props {}

function FooterInfo({}: Props): ReactElement {
  return (
    <FooterInfoStyled className="footer-info">
      <div className="footer__shop">
        More ways to shop:&nbsp;
        <a href="#" className="footer__shop-link">
          Find an Apple Store
        </a>
        &nbsp;or&nbsp;
        <a href="#" className="footer__shop-link">
          other retailer
        </a>
        &nbsp;near you. Or call 1-800-MY-APPLE.
      </div>
      <div className="footer__locate">
        <a href="#" className="footer__locate-link">
          Untied States
        </a>
      </div>
      <div className="footer__legal">
        <div className="footer__copyright">Copyright © 2021 Apple Inc. All rights reserved.</div>
        <div className="footer__legal-links">
          <a href="#" className="footer__legal-link">
            Privacy Policy
          </a>
          <a href="#" className="footer__legal-link">
            Terms of Use
          </a>
          <a href="#" className="footer__legal-link">
            Sales and Refunds
          </a>
          <a href="#" className="footer__legal-link">
            Legal
          </a>
          <a href="#" className="footer__legal-link">
            SiteMap
          </a>
        </div>
      </div>
    </FooterInfoStyled>
  );
}

export default FooterInfo;
