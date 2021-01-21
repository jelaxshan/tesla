import styled, { keyframes } from 'styled-components';
import ArrowDown from '../../assets/arrow-down.svg';

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

export const StyledContainer = styled.div`
  width: 100vw;
`;

export const StyledDiv = styled.div`
  margin-top: calc(16vh + 20px);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledButtonWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${({ theme: { mediaQueries } }) => `
    ${mediaQueries.mediumAndUp} {
      flex: 1 1 auto;
      display: flex;
      justify-content: center;
      flex-direction: row;
    }
  `}
`;

export const StyledBottomContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: calc(48vh + 75px);
`;

const bounce = keyframes`
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }`;

export const StyledArrowDown = styled.svg`
  animation: ${bounce} 2s infinite;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
`;
