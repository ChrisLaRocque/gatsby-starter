import { generateImageData } from "gatsby-plugin-image"
import { getGatsbyImageResolver } from "gatsby-plugin-image/graphql-utils"

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
const fetch = require('node-fetch');

// Image stuff
const generateImageSource = (baseURL, width, height, format, quality) => {
  const src = `${baseURL}?w=${width}&h=${height}&fmt=${format}&q=${quality || 80}`
  return { src, width, height, format }
}
const resolveGatsbyImageData = async (image, options) => {
	const chosenURL = image.urls.raw
	const getURL = chosenURL.split('?')[0]
	const params = new URLSearchParams(chosenURL.split('?')[1])
	const format = params.get('fm')
	const quality = params.get('q')
	const parsedImage = {
		src: getURL,
		format:format,
		quality: quality,
		...image
	}

 const filename = parsedImage.src

 const sourceMetadata = {
	width: parsedImage.width,
	height: parsedImage.height,
	format: parsedImage.format,
	quality: parsedImage.quality
 }
 const imageDataArgs = {
	 ...options,
	 // Passing the plugin name allows for better error messages
	 pluginName: `gatsby-source-pain`,
	 sourceMetadata,
	 filename,
	 generateImageSource,
	 options,
	 backgroundColor: parsedImage.color
 }

 return generateImageData(imageDataArgs)
}

export function createResolvers({ createResolvers }) {
  createResolvers({
    UnsplashImage: {
      gatsbyImageData: getGatsbyImageResolver(resolveGatsbyImageData, {
        quality: "Int",
      }),
    },
  })
}
export async function sourceNodes({
  actions: { createNode },
  createContentDigest
}){

	const imageFetch = await fetch(
    `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_KEY}&page=1&per_page=100&query=vintage&orientation=landscape`
  );
	
	// Resolve gatsby image data + create image nodes
	const imageData = await imageFetch.json()
	imageData.results.forEach((image, index)=>{
		createNode({
			...image,
			loopIndex: index,
			internal: {
				type: 'UnsplashImage',
				contentDigest: createContentDigest(image)
			}
		});
	})
};