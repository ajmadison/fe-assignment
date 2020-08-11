import React from "react";
import "./PageHeader.scss";

interface Props {
  children: any;
  // title: React.FC;
}

interface Compound {
  Title?: React.FC<TitleProps>;
}

export const PageHeader: React.FC<Props> & Compound = ({ children }) => {
  return <div className="page-header">{children}</div>;
};

interface TitleProps {}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className="page-header__title">{children}</h1>;
};

PageHeader.Title = Title;
