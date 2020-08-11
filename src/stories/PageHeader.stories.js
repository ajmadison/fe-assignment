import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader.tsx";

export default {
  title: "Page Header",
  component: PageHeader,
};

export const Header = () => {
  return (
    <PageHeader>
      <PageHeader.Title>This is the page title!</PageHeader.Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
      luctus eros, sed porttitor eros. Nunc vulputate felis purus, quis bibendum
      dolor aliquam ut. Aliquam fringilla non turpis vitae suscipit. Phasellus
      mollis ligula in hendrerit pulvinar. Etiam lacinia in dolor ac maximus.
      Suspendisse viverra mollis nunc at convallis. Fusce eleifend justo non
      nisl condimentum vestibulum.
    </PageHeader>
  );
};
