import styled from 'styled-components/macro';

export const MainIp13ProStyled = styled.main`
  overflow: hidden;
  .hero-ip13pro {
    overflow: hidden;

    &__wrapper {
      margin-top: 13.2rem;
      text-align: center;
    }

    &__headline {
      font-size: 2.8rem;
      font-weight: 500;
    }

    &__subhead {
      font-size: 8rem;
      font-weight: 500;
    }

    &__video-container {
      max-width: 256rem;
      position: relative;
      left: 50%;
      margin-left: -1280px;
      height: 750px;
      margin-top: -80px;
      z-index: -1;
    }

    &__video {
      object-fit: contain;
    }
  }

  /* design-ip13pro__context */
  .design-ip13pro {
    &__context {
      padding-top: 8.5rem;
      padding-bottom: 7.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__display {
      display: flex;
      justify-content: center;
      height: 700px;

      &-pro-max {
        height: fit-content;
        display: flex;
        align-items: center;
        transform: translateX(70px);
      }

      &-pro {
        height: fit-content;
        display: flex;
        align-items: center;
        transform: translate(-70px, 62px);
      }
    }

    &__img {
    }

    &__spec-pro-max {
      text-align: right;
      margin-right: 4rem;
    }

    &__spec-pro {
      text-align: left;
      margin-left: 4rem;
    }

    &__spec {
      &-name {
        font-size: 2rem;
        font-weight: 500;
      }

      &-size {
        font-size: 4rem;
        font-weight: 600;
      }
    }

    &__display-sub {
      margin-top: 20px;
      transform: translateX(30px);
      p {
        font-size: 1.9rem;
        font-weight: 500;
        sup {
          font-size: 1rem;
        }
      }
    }
  }

  /* design-ip13pro__gallery */
  .design-ip13pro {
    &__gallery {
      max-width: 256rem;
      margin: 0 auto;

      &-item {
        height: 90rem;
        overflow: hidden;
      }
    }

    .gallery-bg-grey {
      background-color: var(--bg-grey-3);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      img {
        width: fit-content;
      }
      p {
        font-size: 1.9rem;
        font-weight: 500;
        text-align: center;
        span {
          display: block;
        }
      }
    }

    .gallery-bg-black {
      background-color: var(--bg-black-3);
      padding: 10.4rem 10rem 0;
      text-align: center;
    }
  }

  /* design-ip13pro__resistant */
  .design-ip13pro {
    &__resistant {
      max-width: 256rem;
      max-height: 90rem;
      overflow: hidden;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-subtitle {
        margin: 3rem 0 2rem;
        p {
          color: #000;
          font-size: 1.9rem;
          font-weight: 500;
          text-align: center;
          span {
            display: block;
            sup {
              font-size: 1.2rem;
            }
          }
        }
      }

      &-image {
        img {
        }
      }
    }
  }

  .camera-ip13pro {
    &__grid {
      height: 1000px;
      max-width: 102.4rem;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 30.7rem minmax(8.5rem, 4fr) minmax(2.1rem, 1fr) 1.14rem 45.3rem;
      grid-template-rows: auto auto 30rem auto 9rem auto 30.5rem auto 12rem auto auto;
      padding-bottom: 13.3rem;
    }
  }
`;
