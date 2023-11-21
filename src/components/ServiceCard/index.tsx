import { BaseImage } from "@/utils/baseImage"
import { ResponsiveImage } from "../ResponsiveImage"

type ServiceCardProps = {
  baseImage: BaseImage
  title: string
  description: string
}

export function ServiceCard({ baseImage, title, description }: ServiceCardProps) {

  return (
    <article className="w-72 sm:w-96 h-[32rem] sm:h-[38rem] bg-white flex flex-col p-4 mx-2 sm:mx-4 border border-solid border-gray-400">

      <ResponsiveImage
        sources={baseImage.src}
        alt={baseImage.alt}
      />

      <h3 className="my-5 text-xl sm:text-2xl text-gray-500 font-bold">
        {title}
      </h3>

      <p className="text-base sm:text-xl text-gray-500">
        {description}
      </p>
    </article>
  )
}