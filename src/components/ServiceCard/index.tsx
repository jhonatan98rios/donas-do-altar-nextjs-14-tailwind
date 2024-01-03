import Image from 'next/image'

type ServiceCardProps = {
  image: string
  alt: string
  title: string
  description: string
}

export function ServiceCard({ image, alt, title, description }: ServiceCardProps) {

  return (
    <article className="w-72 sm:w-96 h-[32rem] sm:h-[34rem] bg-white flex flex-col p-4 mx-2 sm:mx-4 border border-solid border-gray-400">
      <Image 
        src={ image } 
        alt={alt} 
        title={title} 
        width={345} 
        height={230} 
      />

      <h2 className="my-5 text-xl sm:text-2xl text-gray-500">
        {title}
      </h2>

      <p 
        className="text-sm sm:text-base text-gray-500" 
        dangerouslySetInnerHTML={{ __html: description }} 
      />
    </article>
  )
}