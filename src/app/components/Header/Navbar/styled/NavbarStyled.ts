import styled from 'styled-components/macro';

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    list-style: none;
    li a { 
      margin-right: 2rem;
      color: #243746;
      text-decoration: none;
    }
  }
  
  .navigation {

    
    
    &--left {
      color: red;
      font-size: 2rem;
      padding: 0 0.8rem;
      height: 4.4rem;
      display: flex;
      align-items: center;
    }
    &__link {
      display: flex;
      
    }
    &--right {
      color: red;
      font-size: 2rem;
      padding: 0 0.8rem;
      height: 4.4rem;
      display: flex;
      align-items: center;

    }

    /* &__link a{
      font-size: 1.2rem;
      color: var(--text-color-grey-1);
      text-decoration: none;
      letter-spacing: 1px;
      transition: all 0.3s;
    }

    &__item:hover,
    &__link:hover {
      color: var(--text-color-white-1);
      cursor: pointer;
    }

    &__icon {
      font-size: 2rem;
    } */
  }
`;
