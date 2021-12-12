import styled from 'styled-components/macro';
import IPhone13Large from 'media/img/iphone-13-large.jpg';

export const IPhone13Styled = styled.div`
  background-image: url(${IPhone13Large});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .iphone13 {
    &__headline {
      font-size: 4rem;
      color: var(--text-color-white-1);
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
