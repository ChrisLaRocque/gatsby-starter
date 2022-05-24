import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";

export default function NotFoundPage({ data, location }) {
  const image = data.allUnsplashImage.edges[0].node;
  return (
    <Layout
      seoInfo={{
        title: "404 - Page not found",
        description: "My bad.",
        href: location.href,
      }}
    >
      <Hero
        headline="404"
        body="You hit a page that does not exist. My bad!"
        image={image}
        buttons={[{ to: "/", text: "Home" }]}
      />
    </Layout>
  );
}

export const query = graphql`
  query FourOhFourPageQuery {
    allUnsplashImage(skip: 27) {
      edges {
        node {
          gatsbyImageData
          alt_description
          description
        }
      }
    }
  }
`;
