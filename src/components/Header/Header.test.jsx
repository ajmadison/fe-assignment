import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';


test('Component is in the document', () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Component is visible', () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toBeVisible();
});

test('Text is in the document', () => {
  const { getByText } = render(<Header />);
  expect(getByText('Appliance Packages')).toBeInTheDocument();
});

test('Text is visible', () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Looking for a great deal/)).toBeVisible();
});
