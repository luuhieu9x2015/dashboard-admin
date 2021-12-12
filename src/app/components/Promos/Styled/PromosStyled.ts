import styled from 'styled-components/macro';

export const PromosStyled = styled.section`
  width: 100%;
  padding: 0 1rem;

  .promos {
    &__item {
      width: 100%;
      height: 58rem;
      background-repeat: no-repeat;
      background-position: center;
    }

    &__link {
      font-size: 1.7rem;
      font-weight: 400;
      color: var(--text-color-blue-5);
    }

    &__arrow {
      font-size: 1.2rem;
    }

    &__more {
      margin-right: 2rem;
    }
  }
`;