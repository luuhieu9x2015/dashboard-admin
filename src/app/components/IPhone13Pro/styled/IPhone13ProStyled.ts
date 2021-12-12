import styled from 'styled-components/macro';
import IPhone13Pro from 'media/img/iphone-13pro-large.jpg';

export const IPhone13ProStyled = styled.section`
  background-color: var(--bg-white-1);
  border-bottom: var(--gutter-width-1) solid var(--gutter-color-1);
  padding-top: 6.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 70rem;
  overflow: hidden;
  /* border-bottom: 1px solid #000; */

  .iphone13pro {
    &__content {
      text-align: center;
      z-index: 1;
    }

    &__headline {
      font-size: 5.5rem;
      font-weight: 600;
      line-height: 1;
    }

    &__subhead {
      font-size: 3rem;
      font-weight: 400;
      margin: 0.5rem 0;
    }

    &__link {
      &-more {
        margin-right: 4.5rem;
      }

      &-more,
      &-buy {
        font-size: 2.1rem;
      }
    }

    &__image {
      height: 100%;
      width: 100%;
    }

    &__iframe {
      width: 301rem;
      height: 73.6rem;
      background-size: 301rem 73.6rem;
      background-repeat: no-repeat;
      background-image: url(${IPhone13Pro});

      position: absolute;
      margin: 0;
      padding: 0;
      top: -5%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
