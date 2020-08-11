import React from "react";
import { AppliancePackages } from "../components/AppliancePackages/AppliancesPackages";
import { db } from "../db";

const data = db.slice(0, 8);

export default {
  title: "Appliance Packages",
  component: AppliancePackages,
};

export const AppliancePackagesArea = () => (
  <AppliancePackages data={data}></AppliancePackages>
);
