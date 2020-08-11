import React from "react";
import "./AppliancePackages.scss";
import { Package as PackageInterface } from "../../interfaces/package.interface";
import { Package } from "../Package/Package";

interface Props {
  data: PackageInterface[];
}

export const AppliancePackages: React.FC<Props> = ({ data }) => {
  return (
    <div className="appliance-packages">
      {data.map((appliancePackage) => {
        return (
          <Package
            appliancePackage={appliancePackage}
            key={`${appliancePackage.sku}`}
          ></Package>
        );
      })}
    </div>
  );
};
