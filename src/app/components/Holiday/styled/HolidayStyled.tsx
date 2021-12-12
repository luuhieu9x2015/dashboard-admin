import styled from 'styled-components/macro';

export const HolidayStyled = styled.section`
  background-color: #e34140;
  padding: 1.2rem;

  .holiday {
    &__paragraph {
      text-align: center;
      font-size: 1.4rem;
      color: var(--color-white-1);
      letter-spacing: 0.5px;
    }

    &__link {
      text-decoration: none;
      color: var(--color-white-1);
      margin: 0 0.2rem;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    &__icon-arrow {
      font-size: 1rem;
    }
  }
`;
