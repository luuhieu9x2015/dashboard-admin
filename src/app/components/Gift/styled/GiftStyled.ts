import styled from 'styled-components/macro';
import logoAppleGift from 'media/img/logo-apple-gift.png';
import macbookLarge from 'media/img/macbook-large.png';
import iphoneLarge from 'media/img/iphone-large.png';
import ipadminiLarge from 'media/img/ipadmini-large.png';

export const GiftStyled = styled.section`
  background-color: var(--bg-grey-1);
  padding: 3rem 0;
  border-bottom: var(--gutter-width-1) solid var(--gutter-color-1);
  display: flex;
  flex-direction: column;
  align-items: center;

  .gift {
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 3rem;
    }

    &__icon-apple-gift {
      width: 7rem;
      height: 8.8rem;
      background-size: 7rem 8.8rem;
      background-repeat: no-repeat;
      background-image: url(${logoAppleGift});
    }

    &__title {
      font-size: 5.5rem;
      font-weight: 500;
      text-align: center;
    }

    &__link-arrow {
      font-size: 2.1rem;
    }

    &__icon-arrow {
    }

    // Gallery
    &__gallery {
      display: flex;
    }

    &__image-item {
      transform: rotate(20deg);
      animation-name: rotate20;
      animation-duration: 5s;
    }

    &__image {
      width: 35.9rem;
      height: 34.8rem;
      background-size: 35.9rem 34.8rem;
      background-repeat: no-repeat;
    }

    &__img-macbook {
      background-image: url(${macbookLarge});
    }

    &__img-iphone {
      background-image: url(${iphoneLarge});
    }

    &__img-ipadmini {
      background-image: url(${ipadminiLarge});
    }
  }
`;
