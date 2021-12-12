import styled from 'styled-components/macro';
import WatchLarge from 'media/img/watch-large.jpg';
import WatchLogoTitle from 'media/img/watch-logo-title.png';

export const WatchStyled = styled.div`
  background-image: url(${WatchLarge});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 4rem;

  .watch {
    &__title {
      color: var(--text-color-orange-1);
      font-size: 1.5rem;
    }

    &__headline {
      width: 14.6rem;
      height: 5.6rem;
      background-size: 14.6rem 5.6rem;
      background-image: url(${WatchLogoTitle});
      background-repeat: no-repeat;
      background-position: center;
      margin: 1.2rem 0;
    }

    &__subhead {
      font-size: 2rem;
      font-weight: 400;
      color: var(--text-color-pink-1);
      margin-bottom: 1.2rem;
    }

    &__link {
      
    }
  }
`;
