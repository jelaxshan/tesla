import React from 'react';
import { StyledFooter, StyledUl, StyledLi } from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledUl>
        <StyledLi>Tesla © 2021</StyledLi>
        <StyledLi>Privacy & Legal</StyledLi>
        <StyledLi>Contact</StyledLi>
        <StyledLi>Careers</StyledLi>
        <StyledLi>Get NewsLetter</StyledLi>
        <StyledLi>News</StyledLi>
        <StyledLi>Locations</StyledLi>
      </StyledUl>
    </StyledFooter>
  );
};
