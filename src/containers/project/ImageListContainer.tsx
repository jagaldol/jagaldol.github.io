import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

export default function ImageListContainer({
  imageList400,
  imageList200,
}: {
  imageList400: IGatsbyImageData[]
  imageList200: IGatsbyImageData[]
}) {
  const breakpoints = useBreakpoint()

  return imageList400.length > 0 ? (
    <div className="flex justify-center my-10 bg-neutral-100">
      <div className="flex gap-5 overflow-x-scroll hide-scroll-bar">
        {breakpoints.lg
          ? imageList200.map((image: IGatsbyImageData, index) => (
              <GatsbyImage
                alt=""
                image={image}
                className="rounded h-full min-w-max"
                objectFit="contain"
                key={image.images.fallback?.src || `image-${index}`}
              />
            ))
          : imageList400.map((image: IGatsbyImageData, index) => (
              <GatsbyImage
                alt=""
                image={image}
                className="rounded h-full min-w-max"
                objectFit="contain"
                key={image.images.fallback?.src || `image-${index}`}
              />
            ))}
      </div>
    </div>
  ) : null
}
