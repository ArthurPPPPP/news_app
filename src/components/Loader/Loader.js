import React from "react";
import "./loader.styles.scss";

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loader-background"></div>
    </div>
  );
};
