import styled from 'styled-components';

export const StyledButton = styled.button<{ primary: boolean }>`
  background: ${({ theme: { colors }, primary }) =>
    primary ? colors.darkGrey : colors.lightGrey};
  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.white : colors.black};
  opacity: ${({ primary }) => (primary ? '1' : '0.65')};
  text-align: center;
  border: 1px solid grey;
  border-radius: 50px;
  text-decoration: none;
  font-size: 12px;
  width: 256px;
  height: 40px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
