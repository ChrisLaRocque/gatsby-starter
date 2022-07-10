import React from "react";
import PropTypes from "prop-types";
import SEO from "../SEO";
import Header from "../Header/Header";
import ScrollProgress from "./ScrollProgress/ScrollProgress";
import "./layout.scss";

export default function Layout({ children, seoInfo, scrollProgress }) {
  return (
    <>
      {scrollProgress && <ScrollProgress />}
      <SEO {...seoInfo} />
      <Header />
      <main id="page-wrapper">{children}</main>
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  seoInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.shape({}).isRequired,
    image: PropTypes.string,
  }).isRequired,
  scrollProgress: PropTypes.bool,
};
Layout.defaultProps = {
  scrollProgress: false,
};
