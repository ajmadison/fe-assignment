import React, {useState} from 'react';
import '../stylesheets/product_filters.scss';
import {Checkbox} from './checkbox';

export const ProductFilters = ({
  handleChangeApplicancesDropdown,
  handleClearFilters,
}) => {

  return (
    <div className="ProductFilters">
      <div className="ProductFilters-sortAndFilter">SORT & FILTER</div>
      <div className="ProductFilters-filterWrappers">
        <div className="ProductFilters-selectAppliances">
        <h2 className="ProductFilters-sortTitle">Select Appliances:</h2>
        <select onChange={handleChangeApplicancesDropdown} name="Select Appliances" className="ProductFilters-appliancesDropdown">
          <option value="Cooktop">Cooktop</option>
          <option value="Dishwasher">Dishwasher</option>
          <option value="Microwave">Microwave</option>
          <option value="Range">Range</option>
          <option value="Range Hood">Range Hood</option>
          <option value="Refrigerator">Refrigerator</option>
          <option value="Wall Oven ">Wall Oven </option>
        </select>
        </div>
        <div className="ProductFilters-sortBy">
        <h2 className="ProductFilters-sortTitle">Sort By:</h2>
        <select name="Sort By" className="ProductFilters-sortByDropdown">
          <option value="Highest Price">Highest Price</option>
          <option value="Lowest Price">Lowest Price</option>
        </select>
        </div>
        <div className="ProductFilters-quickShip">
          <h2 className="ProductFilters-sortTitle">Delivery Method:</h2>
          <div className="ProductFilters-quickShipCheckbox">
            <Checkbox isActive={false} />
          </div>
        </div>
      </div>
      <button onClick={handleClearFilters} className="ProductFilters-clearAllButton">Clear All</button>
    </div>
  )
}

//Cooktop, Dishwasher, Microwave, Range, Range Hood, Refrigerator, Wall Oven 