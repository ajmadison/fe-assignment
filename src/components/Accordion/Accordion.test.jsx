import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';


test('Component is in the document', () => {
  const { container } = render(<Accordion name={"Sample Name"} />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Component is visible', () => {
  const { container } = render(<Accordion name={"Sample Name"} />);
  expect(container.firstChild).toBeVisible();
});