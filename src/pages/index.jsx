import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import TextAnimSplit from "../components/TextAnimSplit/TextAnimSplit";
import Video from "../components/Video/Video";
import Cards from "../components/Cards/Cards";

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
        location,
        title: "Chris LaRocque Gatsby starter",
        description: "Gatsby starter with things working how I like.",
        image: heroImage.urls.regular,
      }}
      scrollProgress
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
      <Video videoId="fC_q9KPczAg" />
      <Cards
        headline="Gatsby starter"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ratione non rem, nostrum exercitationem, eum, veniam recusandae"
        cards={[
          {
            headline: "Card 1",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ratione non rem, nostrum exercitationem, eum, veniam recusandae",
            button: {
              to: "/",
              text: "Learn More",
            },
            image: images[randomIntFromInterval(0, 19)],
          },
          {
            headline: "Card 2",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ratione non rem, nostrum exercitationem, eum, veniam recusandae",
            button: {
              to: "/",
              text: "Learn More",
            },
            image: images[randomIntFromInterval(0, 19)],
          },
          {
            headline: "Card 3",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ratione non rem, nostrum exercitationem, eum, veniam recusandae",
            button: {
              to: "/",
              text: "Learn More",
            },
            image: images[randomIntFromInterval(0, 19)],
          },
          {
            headline: "Card 4",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ratione non rem, nostrum exercitationem, eum, veniam recusandae",
            button: {
              to: "/",
              text: "Learn More",
            },
            image: images[randomIntFromInterval(0, 19)],
          },
          {
            headline: "Card 5",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ratione non rem, nostrum exercitationem, eum, veniam recusandae",
            button: {
              to: "/",
              text: "Learn More",
            },
            image: images[randomIntFromInterval(0, 19)],
          },
        ]}
        buttons={[
          { to: "/", text: "Learn more" },
          { to: "/", text: "Learn morer" },
        ]}
      />
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
