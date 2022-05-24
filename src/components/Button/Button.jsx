import React from "react";
import { Link } from "gatsby";
import "./button.scss";

export default function Button({ to, text, style }) {
  return (
    <Link to={to} className="btn">
      <button type="button">{text}</button>
    </Link>
  );
}
