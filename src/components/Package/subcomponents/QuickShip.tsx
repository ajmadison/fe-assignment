import React from "react";
import "./QuickShip.scss";

interface Props {
  isQuickShip: boolean;
}

export const QuickShip: React.FC<Props> = ({ isQuickShip }) => {
  const className = isQuickShip ? "isQuickShip__true" : "isQuickShip__false";
  return <div className={`${className} isQuickShip`}></div>;
};
