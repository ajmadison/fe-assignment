import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from './ProductCard';


test('Component is in the document', () => {
  const { container } = render(<ProductCard />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Component is visible', () => {
  const { container } = render(<ProductCard />);
  expect(container.firstChild).toBeVisible();
});

test('QuickShip logo is in the document', () => {
  const { getByAltText } = render(<ProductCard />);
  expect(getByAltText('quick ship')).toBeInTheDocument();
});

test('button is in the document', () => {
  const { getByText } = render(<ProductCard />);
  expect(getByText(/VIEW PACKAGE/)).toBeInTheDocument();
});

