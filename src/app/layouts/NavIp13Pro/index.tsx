import React, { ReactElement } from 'react';

import { NavIp13ProStyled } from './styled/NavIp13ProStyled';

interface Props {}

function NavIp13Pro({}: Props): ReactElement {
  return (
    <NavIp13ProStyled className="nav-ip13pro">
      <div className="nav-ip13pro__wrapper">
        <div className="nav-ip13pro__title">
          <a href="#" className="nav-ip13pro__title-link">
            iPhone 13 Pro
          </a>
        </div>
        <div className="nav-ip13pro__menu">
          <div className="nav-ip13pro__menu">
            <ul className="nav-ip13pro__menu-items">
              <li className="nav-ip13pro__menu-item">
                <a href="#" className="nav-ip13pro__menu-link">
                  Overview
                </a>
              </li>
              <li className="nav-ip13pro__menu-item">
                <a href="#" className="nav-ip13pro__menu-link">
                  Switch to IPhone
                </a>
              </li>
              <li className="nav-ip13pro__menu-item">
                <a href="#" className="nav-ip13pro__menu-link">
                  Tech Specs
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-ip13pro-actions">
            <a href="#" className="nav-ip13pro-btn">
              Buy
            </a>
          </div>
        </div>
      </div>
    </NavIp13ProStyled>
  );
}

export default NavIp13Pro;
