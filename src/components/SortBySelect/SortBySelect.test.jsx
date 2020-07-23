import React from 'react';
import { render } from '@testing-library/react';
import SortBySelect from './SortBySelect';


test('Component is in the document', () => {
  const { container } = render(<SortBySelect />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Component is visible', () => {
  const { container } = render(<SortBySelect />);
  expect(container.firstChild).toBeVisible();
});