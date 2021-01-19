import React from 'react';
import styled from 'styled-components';

export const StyledItem = styled.div<{ backgroundImage: any }>`
  height: 100vh;
  width: 100vw;

  background: url(${(props) => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

interface Props {
  title: string;
  desc: string;
  backgroundImage: any;
}
function PageItems({
  title,
  desc,
  // descLink,
  backgroundImage,
}: // leftButton,
// leftButtonText,
// rightButton,
// rightButtonText,
// twoButtons,
// first,
Props) {
  return (
    <StyledItem backgroundImage={backgroundImage}>
      <div className="item__container">
        <div className="item__text" style={{ marginTop: '10rem' }}>
          <p>{title}</p>
          <div className="item__textDesc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="item__lowerThird">
          <div className="item__buttons"></div>
        </div>
      </div>
    </StyledItem>
  );
}

export default PageItems;
