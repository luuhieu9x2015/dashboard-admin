import styled from 'styled-components/macro';
import homepodLarge from 'media/img/homepod-mini-large.jpg';

export const HomePodStyled = styled.div`
  background-image: url(${homepodLarge});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 4rem;

  .homepod {
    &__headline {
      font-size: 4rem;
      color: var(--color-black-1);
    }
    &__subhead {
      font-size: 2rem;
      font-weight: 400;
      color: var(--text-color-grey-2);
      margin-bottom: 1.2rem;
    }

    &__link {
      a {
        color: var(--text-color-blue-1);
      }
    }
  }
`;
