import React from "react";
import "./FilterBar.scss";

interface Action {
  type: string;
}
interface Props {
  dispatch: (action: Action) => {};
}

export const FilterBar: React.FC<Props> = ({ dispatch }) => {
  return (
    <div className="filter-bar">
      <div className="filter-bar__left">
        <label>
          Select Appliances:
          <select id="select-appliances" disabled>
            <option value="allSelected">All Appliances Selected</option>
            <option value="4Selected">4 Appliances Selected</option>
            <option value="5Selected">5 Appliances Selected</option>
          </select>
        </label>
        <label>
          Sort By:
          <select
            id="sort-by"
            onChange={(e) => dispatch({ type: e.target.value })}
          >
            <option value="CLEAR" className="filter-bar__test">
              --
            </option>
            <option value="HIGHEST" className="filter-bar__test">
              Highest Price
            </option>
            <option value="LOWEST" className="filter-bar__test">
              Lowest Price
            </option>
          </select>
        </label>
        <label>
          Delivery Method:{" "}
          <span>
            Quick Ship:
            <input
              id="delivery-method"
              type="checkbox"
              value="quickShip"
              disabled
            ></input>
          </span>
        </label>
      </div>
      <div className="filter-bar__right">
        <button
          className="filter-bar__button"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          CLEAR ALL
        </button>
      </div>
    </div>
  );
};

// So, I disabled the quick ship and select appliances inputs and didn't implement their sorting
// Honestly, I didn't feel like I had enough info to understand what was meant to be happening
// with the "select appliances" sort and it seems that all of the packages returned from the endpoint
// are NOT avaible for quick ship so turning that on would essentially just clear the screen.
// I implemented the sorting by price as an example of how I would go about solving the problems though.
