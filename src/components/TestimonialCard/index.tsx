
type TestimonialCardProps = {
  img?: string
  name: string
  description: string
}

export function TestimonialCard({ img="https://placehold.co/56x56", name, description }: TestimonialCardProps) {

  return (
    <article className="w-[20rem] sm:w-[24rem] h-[30rem] sm:h-[32rem] bg-white flex flex-col px-4 py-4 mx-4 border border-solid border-gray-400">

      <div className="flex justify-center items-center mb-4">
        <img src={img} alt={`Imagem de avatar ${name}`} className="rounded-full" />
        <div className="text-left ml-5 text-gray-500">
          <p className="text-xl sm:text-2xl"> Por {name} </p>
        </div>
      </div>

      <p 
        className="text-sm sm:text-base text-gray-500 y" 
        dangerouslySetInnerHTML={{ __html: `"${description}"` }} 
      />
    </article>
  )
}