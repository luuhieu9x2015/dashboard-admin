import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { HolidayStyled } from './styled/HolidayStyled';

interface Props {}

function Holiday({}: Props): ReactElement {
  return (
    <HolidayStyled className="holiday">
      <p className="holiday__paragraph">
        Shop early for the best selection of favorites.
        <Link to="/" className="holiday__link">
          Shop now
        </Link>
        <ArrowForwardIosOutlinedIcon className="holiday__icon-arrow" />
      </p>
    </HolidayStyled>
  );
}

export default Holiday;
