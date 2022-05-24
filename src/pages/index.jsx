import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import TextAnimSplit from "../components/TextAnimSplit/TextAnimSplit";

export default function IndexPage({ data, location }) {
  const images = data.allUnsplashImage.edges.map(({ node }) => node);

  // just to grab a random image
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const heroImage = images[randomIntFromInterval(0, 19)];

  return (
    <Layout
      seoInfo={{
        location: location,
        title: "Chris LaRocque Gatsby starter",
        description: "Gatsby starter with things working how I like.",
        image: heroImage.urls.regular,
      }}
    >
      <Hero
        headline="Gatsby starter"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ratione non rem, nostrum exercitationem, eum, veniam recusandae"
        image={heroImage}
        buttons={[
          { to: "/", text: "Learn more" },
          { to: "/", text: "Learn morer" },
        ]}
      />
      <TextAnimSplit
        headline="Text+image split w/animation"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ratione non rem, nostrum exercitationem, eum, veniam recusandae"
        image={images[randomIntFromInterval(0, 19)]}
      />
      <TextAnimSplit
        headline="Same but flipped"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ratione non rem, nostrum exercitationem, eum, veniam recusandae"
        image={images[randomIntFromInterval(0, 19)]}
        flip
        buttons={[
          { to: "/", text: "Learn more" },
          { to: "/", text: "Learn morer" },
        ]}
      />
      <section>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p></p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query HomepageQuery {
    allUnsplashImage(limit: 20) {
      edges {
        node {
          gatsbyImageData
          alt_description
          description
          urls {
            regular
          }
        }
      }
    }
  }
`;
