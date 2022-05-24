import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function SEO({ description, title, location, image }) {
  const { href, origin } = location;
  const fallbackImage = `${origin}/meta.jpg`;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:url`,
          content: href,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "@TophLaRoph",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `viewport`,
          content: `width=device-width,initial-scale=1.0`,
        },
      ]}
    >
      <link rel="canonical" href={href} />
    </Helmet>
  );
}

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.shape({}).isRequired,
  image: PropTypes.shape({}),
};
SEO.defaultProps = {
  image: null,
};
