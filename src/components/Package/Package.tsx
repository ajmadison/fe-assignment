import React from "react";
import "./Package.scss";
import { Package as PackageInterface } from "../../interfaces/package.interface";
import { Pricing } from "./subcomponents/Pricing";
import { Button } from "./subcomponents/Button";

import { QuickShip } from "./subcomponents/QuickShip";

interface Props {
  appliancePackage: PackageInterface;
}

export const Package: React.FC<Props> = ({ appliancePackage }) => {
  const image = appliancePackage.image;
  return (
    <div className="package">
      <div className="package__image">
        <img src={image.folder + image.filename} alt="" />
      </div>
      <div className="package__copy">
        <strong>{appliancePackage.brand} </strong>
        {appliancePackage.description}
      </div>
      <QuickShip isQuickShip={appliancePackage.is_quick_ship} />
      <Pricing prices={appliancePackage.prices} />
      <div className="package__button">
        <Button text="VIEW PACKAGE" href="#" />
      </div>
    </div>
  );
};

// I am wondering what the best course of action in reference to the height and width of images is here
// some images come with that information embedded in the response, some don't
// however, I am not sure if we're getting any of that information for any of the packages in this mockl response
