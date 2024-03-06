import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export default function ImageListContainer({ imageList }: { imageList: IGatsbyImageData[] }) {
  return imageList.length > 0 ? (
    <div className="flex justify-center my-10 bg-neutral-100">
      <div className="h-[400px] max-w-full flex gap-5">
        {imageList.map((image: IGatsbyImageData, index) => (
          <GatsbyImage
            alt=""
            image={image}
            className="rounded h-full w-auto"
            objectFit="contain"
            key={image.images.fallback?.src || `image-${index}`}
          />
        ))}
      </div>
    </div>
  ) : null
}
