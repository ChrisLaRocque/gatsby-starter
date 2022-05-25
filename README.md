# gatsby-starter

## Developing locally

Using node 14.

## What this should do

Hopefully a quick and easy way to get a basic layout with most SEO tags + boilerplate I like.

### Linting + pretty-ing

I've never gotten the actual gatsby-plugin-eslint-prettier running, but also all I care about is formatting on save.

Should work just by `npm install`-ing and making sure your IDE will listen to prettier.

### Get random images from unsplash + add them to data layer

This is all in `gatsby-node.js` and you can query them + their `gatsbyImageData` through `allUnsplashImage`. You will need to provide your own `UNSPLASH_KEY`. If you don't care about this you can remove both `gatsby-node.js` and `gatsby-node.esm.js` and remove `esm` from `package.json`

### Have dope set of info automatically added by React helmet

Built out a set of tags based on ballpark Googling. `SEO` component inside of `Layout` takes `title`, `description`, and `href` props to popuplate tags.

### General light-weight scss layout w/font-face

I have no idea. Maybe this should all be modules?
