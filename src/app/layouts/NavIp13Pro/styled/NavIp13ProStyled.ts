import styled from 'styled-components/macro';

export const NavIp13ProStyled = styled.nav`
  backdrop-filter: saturate(180%) blur(20px);
  background-color: var(--bg-white-2);
  border-bottom: 1px solid rgba(134, 134, 134, 0.5);

  .nav-ip13pro {
    &__wrapper {
      max-width: 102.4rem;
      margin: 0 auto;
      padding: 1rem 1.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      &-link {
        font-size: 2.1rem;
        font-weight: 500;
        color: var(--text-color-black-1);
        text-decoration: none;
      }
    }

    &__menu {
      display: flex;

      &-items {
        list-style: none;
        display: flex;
      }

      &-item {
        margin-left: 2.4rem;
        letter-spacing: 0.8px;
      }

      &-link {
        color: var(--text-color-grey-4);
        font-size: 1.2rem;
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
          cursor: pointer;
          color: var(--text-color-blue-1);
        }
      }
    }

    &-actions {
      margin-left: 2.4rem;
    }

    &-btn {
      font-size: 1.2rem;
      color: #fff;
      text-decoration: none;
      padding: 0.6rem 1.2rem;
      border-radius: 50px;
      background-color: var(--bg-color-blue-2);
      transition: all 0.3s ease;

      &:hover {
        cursor: pointer;
        background-color: var(--bg-color-blue-1);
      }
    }
  }
`;
