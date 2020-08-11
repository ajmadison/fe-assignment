import React from "react";
import { Pricing } from "../components/Package/subcomponents/Pricing";

export default {
  title: "Pricing Component",
  component: Pricing,
};

const prices = { list_price: 5266, final: 4592 };
const rebates = { instant_amount: 0, mailin_amount: 100 };

export const PricingComponent = () => (
  <Pricing prices={prices} rebates={rebates}></Pricing>
);
