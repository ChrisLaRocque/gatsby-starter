import React from "react";
import PropTypes from "prop-types";
import "./video.scss";

export default function Video({ videoId }) {
  return (
    <section id="video">
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
Video.propTypes = {
  videoId: PropTypes.string,
};
Video.defaultProps = {
  videoId: "fC_q9KPczAg",
};
