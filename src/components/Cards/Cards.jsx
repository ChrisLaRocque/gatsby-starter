import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./cards.scss";

export default function Cards({ headline, body, buttons, cards }) {
  return (
    <section id="cards">
      <div className="text">
        <h3>{headline}</h3>
        <p>{body}</p>
        {buttons && buttons.map((button, i) => <Button key={i} {...button} />)}
      </div>
      <div className="cards">
        {cards.map((card) => (
          <div className="card">
            <div className="card-image">
              <GatsbyImage
                image={card.image.gatsbyImageData}
                alt={card.image.alt_description || card.image.description}
                height={200}
              />
            </div>
            <div className="card-text">
              <h4>{card.headline}</h4>
              <p>{card.body}</p>
              {card.button && <Button {...card.button} />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
Cards.propTypes = {
  headline: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({ to: PropTypes.string, text: PropTypes.string })
  ),
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      buttons: PropTypes.shape({
        to: PropTypes.string,
        text: PropTypes.string,
      }),
      image: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}),
      }),
    })
  ).isRequired,
};
Cards.defaultProps = {
  buttons: null,
};
