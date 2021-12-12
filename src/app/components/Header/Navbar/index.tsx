import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { NavbarStyled } from './styled/NavbarStyled';

interface Props {}

function Navbar({}: Props): ReactElement {
  return (
    <NavbarStyled className="navigation">
      <ul className="navigation--left">
        <li>
          <Link to="/" className="navigation__link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/" className="navigation__link">
            Categories
          </Link>
        </li>
        <li>
          <Link to="/" className="navigation__link">
            Users
          </Link>
        </li>
      </ul>

      <ul className="navigation--right">
        <li>
          <Link to="/login" className="navigation__link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/" className="navigation__link">
            Register
          </Link>
        </li>
      </ul>
    </NavbarStyled>
  );
}

export default Navbar;
