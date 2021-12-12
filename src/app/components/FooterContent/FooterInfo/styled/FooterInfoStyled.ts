import styled from 'styled-components/macro';

export const FooterInfoStyled = styled.div`
  font-size: 1.2rem;
  color: var(--text-color-grey-5);
  line-height: 1.6;
  letter-spacing: 0.5px;
  padding: 34px 0 21px;

  .footer {
    &__shop-link,
    &__locate-link,
    &__legal-link {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    &__shop {
      border-bottom: 1px solid var(--footer-border-color);
      padding-bottom: 8px;

      &-link {
        color: var(--text-color-blue-4);
      }
    }

    &__locate,
    &__legal {
      margin-top: 8px;
    }

    &__locate {
      float: right;
      &-link {
      }
    }

    &__legal {
      display: flex;

      &-link {
        display: inline-block;
        padding: 0 10px;
      }

      &-link:not(:last-child) {
        border-right: 1px solid var(--footer-border-color);
      }

      &-link:first-child {
        padding-left: 0;
      }
    }

    &__copyright {
      margin-right: 20px;
    }
  }
`;
