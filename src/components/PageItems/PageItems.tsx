import Button from '@components/Button/Button';
import { Footer } from '@components/Footer/Footer';
import React from 'react';
import { TeslaInterface } from 'src/utils/teslaData';
import {
  StyledDiv,
  StyledItem,
  StyledHeading1,
  StyledHeading2,
  StyledBottomContent,
  StyledButtonWrapper,
  StyledArrowDown,
  StyledContainer,
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
      <StyledContainer>
        <StyledDiv>
          <StyledHeading1>{title}</StyledHeading1>
          <StyledHeading2 as="h2">
            <>
              {description}
              {descriptionSecond && (
                <a href={descriptionLink}> {descriptionSecond}</a>
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
        {first && (
          <StyledArrowDown viewBox="0 0 330 330">
            <path d="M326 79c-6-5-16-5-22 0L165 219 26 79a15 15 0 00-22 22l150 150a15 15 0 0022 0l150-150c5-6 5-16 0-22z" />
          </StyledArrowDown>
        )}
        {footer && <Footer />}
      </StyledContainer>
    </StyledItem>
  );
}

export default PageItems;
