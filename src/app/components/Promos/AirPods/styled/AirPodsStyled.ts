import styled from 'styled-components/macro';
import AirPodsLarge from 'media/img/airpods-large.jpg';

export const AirPodsStyled = styled.div`
  background-image: url(${AirPodsLarge});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 3.6rem;

  .airpods {
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
