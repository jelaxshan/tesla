import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  ${({ theme: { mediaQueries } }) => `
    ${mediaQueries.mediumAndUp} {
     display: flex;
     justify-content: center;
     flex-direction: row;
     margin-top: 30px;
    }
  `}
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  ${({ theme: { mediaQueries } }) => `
    ${mediaQueries.mediumAndUp} {
     list-style-type: none;
     display: flex;
     justify-content: center;
     flex-direction: row;
    }
  `}
`;

export const StyledLi = styled.li`
  margin-right: 8px;
  margin-left: 8px;
  font-size: 12px;
`;
