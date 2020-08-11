import React from "react";
import { action } from "@storybook/addon-actions";
import { Package } from "../components/Package/Package";
import { QuickShip } from "../components/Package/subcomponents/QuickShip";
import { db } from "../db";

export default {
  title: "Package Display Component",
  component: Package,
};

const samplePackage = db[0];

samplePackage.is_quick_ship = true;

export const PackageDisplay = () => (
  <Package appliancePackage={db[0]}></Package>
);

export const QuickShipTrue = () => <QuickShip isQuickShip></QuickShip>;
