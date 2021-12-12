import React, { ReactElement } from 'react';
import { FooterNavigationStyled } from './styled/FooterNavigationStyled';

interface Props {}

function FooterNavigation({}: Props): ReactElement {
  return (
    <FooterNavigationStyled className="footer-navigation">
      {/* ---- */}
      <div className="footer__column footer__col-shop">
        <div className="footer__col col-shop-learn">
          <h3 className="footer__label">Shop and Learn</h3>
          <ul className="footer__nav">
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Store
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Mac
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                iPad
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                iPhone
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Watch
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                AirPods
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                TV &amp; Home
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                iPod touch
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                AirTag
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Accessories
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* ---- */}
      <div className="footer__column footer__col-services-account">
        <div className="footer__col col-services">
          <h3 className="footer__label">Services</h3>
          <ul className="footer__nav">
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple Music
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple TV+
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple Fitness+
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple News+
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple Arcade
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                iCloud
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple One
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple Card
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple Books
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple Podcasts
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                App Store
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col col-account">
          <h3 className="footer__label">Account</h3>
          <ul className="footer__nav">
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Manage Your Apple ID
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple Store Account
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                iCloud.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* ---- */}
      <div className="footer__column footer__col-store">
        <div className="footer__col col-apple-store">
          <h3 className="footer__label">Apple Store</h3>
          <ul className="footer__nav">
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Find a Store
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Genius Bar
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Today at Apple
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple Camp
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple Store App
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Refurbished and Clearance
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Financing
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple Trade In
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Order Status
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Shopping Help
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* ---- */}
      <div className="footer__column footer__col-for">
        <div className="footer__col col-for-business">
          <h3 className="footer__label">For Business</h3>
          <ul className="footer__nav">
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple and Business
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Shop for Business
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col col-for-education">
          <h3 className="footer__label">For Education</h3>
          <ul className="footer__nav">
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple and Education
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Shop for K-12
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Shop for College
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col col-for-healthcare">
          <h3 className="footer__label">For Healthcare</h3>
          <ul className="footer__nav">
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple in Healthcare
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Health on Apple Watch
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Health Records on iPhone
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col col-for-government">
          <h3 className="footer__label">For Government</h3>
          <ul className="footer__nav">
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Shop for Government
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Shop for Veterans and Military
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* ---- */}
      <div className="footer__column footer__col-values-about">
        <div className="footer__col col-apple-values">
          <h3 className="footer__label">Apple Values</h3>
          <ul className="footer__nav">
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Accessibility
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Education
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Environment
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Inclusion and Diversity
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Privacy
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Racial Equity and Justice
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Supplier Responsibility
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col col-for-about-apple">
          <h3 className="footer__label">About Apple</h3>
          <ul className="footer__nav">
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Newsroom
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Apple Leadership
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Career Opportunities
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Investors
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Ethics &amp; Compliance
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Events
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__item-link">
                Contact Apple
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterNavigationStyled>
  );
}

export default FooterNavigation;
