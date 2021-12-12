import styled from 'styled-components/macro';

export const FooterNavigationStyled = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;

  .footer {
    &__column {
      width: 25%;
    }

    &__col:not(:last-child) {
      margin-bottom: 2.4rem;
    }

    &__label {
      font-size: 1.2rem;
      color: var(--text-color-grey-3);
      margin-bottom: 0.96rem;
    }

    &__nav {
      list-style: none;
    }

    &__item:not(:last-child) {
      margin-bottom: 0.8rem;
    }

    &__item {
      &-link {
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--text-color-grey-4);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
