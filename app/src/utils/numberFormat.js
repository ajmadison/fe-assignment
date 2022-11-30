import React from 'react';
import NumberFormat from 'react-number-format';

function ReactNumberFormat({ value }) {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      decimalScale={2}
      fixedDecimalScale={true}
      prefix={'$'}
    />
  );
}

export default ReactNumberFormat