import React from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../Button/Button";
import "./hero.scss";

export default function Hero({ headline, body, image, buttons }) {
  const { ref, inView } = useInView();
  return (
    <section id="hero" ref={ref} className={`${inView ? "in-view" : ""}`}>
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.alt_description || image.description || "Hero background"}
        className="image"
      />
      <h1>{headline}</h1>
      <p>{body}</p>
      {buttons && buttons.map((button, i) => <Button key={i} {...button} />)}
    </section>
  );
}
Hero.propTypes = {
  headline: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({ to: PropTypes.string, text: PropTypes.string })
  ),
};
Hero.defaultProps = {
  buttons: null,
};
