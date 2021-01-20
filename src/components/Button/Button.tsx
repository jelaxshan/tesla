import React from 'react';
import { StyledButton } from './Button.styled';

export default function Button({
  primary,
  text,
  link,
}: {
  primary?: boolean;
  text: string;
  link: string;
}) {
  return (
    <StyledButton as="a" primary={primary} href={link}>
      {text}
    </StyledButton>
  );
}
