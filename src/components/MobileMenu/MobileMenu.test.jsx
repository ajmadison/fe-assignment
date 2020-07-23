import React from 'react';
import { render } from '@testing-library/react';
import MobileMenu from './MobileMenu';


test('Component is in the document', () => {
  const { container } = render(<MobileMenu />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Component is visible', () => {
  const { container } = render(<MobileMenu />);
  expect(container.firstChild).toBeVisible();
});

test('Text is in the document', () => {
  const { getByText } = render(<MobileMenu />);
  expect(getByText(/Sort & Filter/)).toBeInTheDocument();
});

