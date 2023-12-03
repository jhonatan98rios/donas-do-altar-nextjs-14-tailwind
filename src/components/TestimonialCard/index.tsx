import Image from "next/image"

type TestimonialCardProps = {
  img?: string
  name: string
  description: string
}

export function TestimonialCard({ img="https://placehold.co/56x56", name, description }: TestimonialCardProps) {

  return (
    <article className="w-[20rem] sm:w-[24rem] h-[28rem] sm:h-[30rem] bg-white flex flex-col px-4 py-4 mx-4 border border-solid border-gray-400">

      <div className="flex justify-center items-center mb-4">
        <Image width={56} height={56} src={img} alt={`Imagem de avatar ${name}`} className="rounded-full" />
        <div className="text-left ml-5 text-gray-500">
          <h3 className="text-xl sm:text-2xl"> Por {name} </h3>
        </div>
      </div>

      <p 
        className="text-sm sm:text-base text-gray-500 y" 
        dangerouslySetInnerHTML={{ __html: `"${description}"` }} 
      />
    </article>
  )
}