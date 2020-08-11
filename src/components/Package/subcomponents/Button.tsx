import React from "react";
import "./Button.scss";

interface Props {
  text: string;
  href?: string;
}

export const Button: React.FC<Props> = ({ text, href }) => {
  return (
    <div className="view-package-button">
      <a href={href} className="view-package-button__link">
        {text}
      </a>
    </div>
  );
};

// NOTE: Using an a tag here instead of button because that is more in line with the behavior we'd be expecting.
