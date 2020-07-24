import React from 'react';
import styles from './Selection.module.css';

const ApplianceSelect = () => (
    <span className={styles["selection-container"]}>
       <label className={styles["selection-label"]}>Select Appliances:</label>
        <select>
            <option value="cooktop">Cooktop</option>
            <option value="dishwasher">Dishwasher</option>
            <option value="microwave">Microwave</option>
            <option value="range">Range</option>
            <option value="range hood">Range Hood</option>
            <option value="refrigerator">Refrigerator</option>
            <option value="wall oven">Wall Oven</option>
        </select> 
    </span>
);

const SortBy = ({ handleSort }) => (
  <span className={styles["selection-container"]}>
     <label className={styles["selection-label"]}>Sort By:</label>
        <select onChange={handleSort}>
            <option value="highest">Highest Price</option>
            <option value="lowest">Lowest Price</option>
        </select> 
  </span>
);

const DeliveryMethod = () => (
  <span className={styles["selection-container"]}>
    <label className={styles["selection-label"]}>Delivery Method:</label>
    <input type="checkbox" value="quick ship"></input>
    <label className={styles["selection-label"]} htmlFor="quick ship"> Quick Ship</label>
  </span>
)

const Selection = ({
  handleSort
}) => (
    <div className={styles.container}>
      <div className={styles.controls}>
        <ApplianceSelect />
        <SortBy handleSort={handleSort} />
        <DeliveryMethod />
      </div>
      <button className={styles["clear-all"]}>Clear All</button>
    </div>
);

export default Selection;
