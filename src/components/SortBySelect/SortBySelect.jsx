import React from 'react';

export default function SortBySelect() {
  return (
    <>
      <label htmlFor="sort-by">Sort By</label>
      <select name="sort-by" id="sort-by">
        <option value="highest-price">Highest Price</option>
        <option value="lowest-price">Lowest Price</option>
      </select>
    </>
  );
};

SortBySelect.propTypes = {};