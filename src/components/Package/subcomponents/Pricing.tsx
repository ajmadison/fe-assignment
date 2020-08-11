import React from "react";
import "./Pricing.scss";
import { Prices } from "../../../interfaces/package.interface";

interface Props {
  prices: Prices;
}

export const Pricing: React.FC<Props> = ({ prices }) => {
  const finalPrice = decimalize(prices.final);
  const listPrice = decimalize(prices.list_price);
  const savings = decimalize(prices.list_price - prices.final);
  return (
    <div className="pricing">
      <div className="pricing__final">{`$${finalPrice}`}</div>
      <div className="pricing__savings">
        <div>{`Save $${savings}`}</div>
        <div className="pricing__list">{`$${listPrice}`}</div>
      </div>
    </div>
  );
};

const decimalize = (number: number): string => number.toFixed(2);
