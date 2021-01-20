import Button from '@components/Button/Button';
import React from 'react';
import { TeslaInterface } from 'src/utils/teslaData';
import {
  StyledDiv,
  StyledItem,
  StyledHeading1,
  StyledHeading2,
  StyledBottomContent,
  StyledButtonWrapper,
} from './PageItems.styled';

function PageItems({
  title,
  description,
  descriptionSecond,
  descriptionLink,
  backgroundImage,
  leftButton,
  leftButtonText,
  rightButton,
  rightButtonText,
  first,
  footer,
}: TeslaInterface) {
  return (
    <StyledItem backgroundImage={backgroundImage}>
      <div className="item__container">
        <StyledDiv>
          <StyledHeading1>{title}</StyledHeading1>
          <StyledHeading2 as="h2">
            <>
              {description}
              {descriptionSecond && (
                <a href={descriptionLink}>{descriptionSecond}</a>
              )}
            </>
          </StyledHeading2>
        </StyledDiv>
        <StyledBottomContent>
          <StyledButtonWrapper>
            {leftButton && (
              <Button primary text={leftButtonText} link={leftButton} />
            )}
            {rightButton && (
              <Button text={rightButtonText} link={rightButton} />
            )}
          </StyledButtonWrapper>
        </StyledBottomContent>
        {first && <div>Arrow</div>}
        {footer && <div>Footer component</div>}
      </div>
    </StyledItem>
  );
}

export default PageItems;
