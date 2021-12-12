import styled from 'styled-components/macro';

export const RibbonIp13ProStyled = styled.section`
  background-color: var(--bg-grey-2);

  .ribbon-ip13pro {
    &__context {
      text-align: center;
      height: 5rem;
      /* border-bottom: 1px solid #000000; */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__title {
      font-size: 1.4rem;
      color: var(--text-color-grey-8);

      &-link,
      &-arrow {
        color: var(--text-color-blue-1);
      }

      &-link {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      &-arrow {
        font-size: 1rem;
      }
    }
  }
`;
