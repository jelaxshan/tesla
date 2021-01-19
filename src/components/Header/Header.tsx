import React, { useState } from 'react';
import TeslaLogo from '../../assets/teslaLogoSmall.svg';
import {
  StyledNavBar,
  StyledNavLink,
  StyledNavBarItems,
  StyledNavBarItemsRight,
  StyledNavToogle,
  StyledBurger,
} from './Header.styled';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavBar>
      <StyledNavLink>
        <img src={TeslaLogo} alt="Tesla logo" />
      </StyledNavLink>
      <StyledNavBarItems open={open}>
        <StyledNavLink>MODEL S</StyledNavLink>
        <StyledNavLink>MODEL 3</StyledNavLink>
        <StyledNavLink>MODEL X</StyledNavLink>
        <StyledNavLink>MODEL Y</StyledNavLink>
        <StyledNavLink>POWERWALL</StyledNavLink>
        <StyledNavLink>CHARGING</StyledNavLink>
      </StyledNavBarItems>
      <StyledNavBarItemsRight open={open}>
        <StyledNavLink>SHOP</StyledNavLink>
        <StyledNavLink>TESLA ACCOUNT</StyledNavLink>
      </StyledNavBarItemsRight>
      <StyledNavToogle>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </StyledNavToogle>
    </StyledNavBar>
  );
}

export default Header;
