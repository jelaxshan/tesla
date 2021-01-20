import styled from 'styled-components';

export const StyledButton = styled.button<{ primary: boolean }>`
  background: ${({ theme: { colors }, primary }) =>
    primary ? colors.darkGrey : colors.lightGrey};
  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.lightGrey : colors.darkGrey};

  font-size: 1rem;
  margin: 1em;
  padding-bottom 5px;
  padding-left 40px;
  padding-right 40px;
  padding-top 5px;
  text-align: center;
  border: 1px solid grey;
  border-radius: 50px;
  text-decoration: none;
  width: 256px;
`;
