import styled from 'styled-components';

export const StyledItem = styled.div<{ backgroundImage: any }>`
  height: 100vh;
  width: 100vw;

  background: url(${(props) => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export const StyledHeading1 = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.heading};
`;

export const StyledHeading2 = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.lightBlack};
  font-size: ${({ theme: { fontSize } }) => fontSize.xxxs};
`;

export const StyledDiv = styled.div`
  margin-top: calc(16vh + 20px);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const StyledBottomContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
