import styled from 'styled-components';

export const StyledNavBar = styled.div`
  background-color: transparent;
  background: none;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  z-index: 100;
  position: fixed;
  top: 0;
  width: 95vw;
`;

export const StyledNavLink = styled.div`
  padding-right: 8px;
  flex-direction: row;
`;

export const StyledNavToogle = styled.div`
  display: flex;
  margin-top: -2px;

  ${({ theme: { mediaQueries } }) => `
    ${mediaQueries.largeAndUp} {
      display: none;
      padding-right: 8px;
      flex-direction: row;
    }
  `}
`;

export const StyledNavBarItems = styled.nav<{ open: boolean }>`
  ${({ theme: { mediaQueries } }) => `
    ${mediaQueries.largeAndUp} {
     display: flex;
     margin-top: 7px;
     flex-direction: row;
     position: static;
    }
  `}
  display: none;
`;

export const StyledNavBarItemsRight = styled.nav<{ open: boolean }>`
  ${({ theme: { mediaQueries } }) => `
    ${mediaQueries.largeAndUp} {
     display: flex;
     margin-top: 7px;
     flex-direction: row;
    }
  `}
  display: none;
`;

export const StyledBurger = styled.button<{ open: boolean }>`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
