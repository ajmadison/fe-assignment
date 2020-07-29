import React from "react";
import "./ItemCard.css";

export default function ItemCard(props) {
  const item = props.item;
  const url = getLocatorForImage(item.image.folder);

  return (
    <div className="Card">
      <img src={url}></img>
      <p>
        <strong>{item.brand}</strong> {item.description}
      </p>
      <div className="Shipping">
        <span className="yellow">&#x02713;</span>
        <span className="green">Quick</span>
        <span className="blue">Ship</span>
      </div>
      <div>
        <strong className="Price">{formatPrice(item.prices.final)}</strong>
      </div>
      <div className="Savings">
        <span className="green">Save {formatPrice(getRebateTotal(item.rebates))}</span>
        &nbsp;&nbsp;&nbsp;
        <span className="gray strike-thru">{formatPrice(item.prices.list_price)}</span>
      </div>
      <button className="green">View package</button>
    </div>
  );
}

function getLocatorForImage(folder) {
  return `./logo512.png`;
}

// price in form of float like x.xx
function formatPrice(price) {
  let str = String(price.toFixed(2));
  let i = str.lastIndexOf(".");

  if (str.substring(i))
    while (i >= 0 && typeof str[i - 4] === "string") {
      str = `${str.substring(0, i - 3)},${str.substring(i - 3)}`;
      i -= 3;
    }

  return `$${str}`;
}

function getRebateTotal(rebate = { instant_amount: 0, mailin_amount: 0 }) {
  return rebate.instant_amount + rebate.mailin_amount;
}
