import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import Button from "../Button/Button";
import "./text-anim-split.scss";

export default function TextAnimSplit({
  headline,
  body,
  image,
  flip,
  buttons,
}) {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className={`text-anim-split${flip ? " flip" : ""}${
        inView ? " in-view" : ""
      }`}
    >
      <div className="text">
        <h3>{headline}</h3>
        <p>{body}</p>
        {buttons && buttons.map((button, i) => <Button key={i} {...button} />)}
      </div>
      <div className="image">
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.alt_description || image.description || headline}
        />
      </div>
    </section>
  );
}

TextAnimSplit.propTypes = {
  headline: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.shape({
    gatsbyImageData: PropTypes.shape({}),
  }).isRequired,
  flip: PropTypes.bool,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({ to: PropTypes.string, text: PropTypes.string })
  ),
};
TextAnimSplit.defaultProps = {
  flip: false,
  buttons: null,
};
