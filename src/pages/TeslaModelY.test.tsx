import * as React from 'react';
import { render, screen } from '@testing-library/react';
import TeslaModelY from './TeslaModelY';
import '@testing-library/jest-dom';

test('renders TeslaModelY page correctly', () => {
  render(<TeslaModelY />);

  expect(screen.queryByText('Tesla Model Y')).not.toBeNull();
  expect(screen.getByText('Tesla Model Y')).toBeInTheDocument();
});
