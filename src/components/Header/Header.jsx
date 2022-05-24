import React from "react";
import Button from "../Button/Button";
import "./header.scss";

export default function Header({}) {
  return (
    <header id="site-header">
      <div className="logo">
        <span className="circle" />
        <span className="circle" />
        <span className="circle" />
      </div>
      <nav>
        <Button to="/" text="Button" />
        <Button to="/" text="Button" />
      </nav>
    </header>
  );
}
