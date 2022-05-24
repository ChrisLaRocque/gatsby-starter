import { generateImageData } from "gatsby-plugin-image"

// Image stuff
const generateImageSource = (baseURL, width, height, format, quality) => {
  const src = `${baseURL}?w=${width}&h=${height}&fmt=${format}&q=${quality || 80}`
  return { src, width, height, format }
}
export default async function resolveGatsbyImageData(image, options){
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