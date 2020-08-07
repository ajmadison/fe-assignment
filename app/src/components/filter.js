import React from 'react';
import './filter.scss';

class Filter extends React.Component {
    render() {
        return (
            <div className="filter-container">
                {/* render desktop filter */}
                <div className="filter-container_desktop">
                    <div className="filter-container_desktop-inputs">
                        <label for="select-appliances">Select Appliances:</label>
                        <select name="select-appliances" id="select-appliances">
                            <option value="electric-range">Electric Range</option>
                            <option value="refrigerators">Refrigerators</option>
                            <option value="gas-range">Gas Range</option>
                            <option value="cooktop">Cooktop</option>
                        </select>

                        <label for="sort">Sort By:</label>
                        <select name="sort" id="sort">
                            <option value="highest-price">Highest Price</option>
                            <option value="lowest-price">Lowest Price</option>
                        </select>

                        <span>Delivery Method: </span>
                        <input type="checkbox" className="delivery_checkbox" id="deivery-method" name="deivery-method" checked />
                        <label for="deivery-method"> Quick Ship</label>
                    </div>
                    <button>Clear All</button>
                </div>
                 {/* render mobile filter button */}
                <div className="filter-container_mobile">
                    <button>Sort & Filter</button>
                </div>
            </div>
        )
    }
}

export default Filter;