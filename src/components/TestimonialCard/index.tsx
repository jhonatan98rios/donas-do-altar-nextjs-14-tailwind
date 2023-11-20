
type TestimonialCardProps = {
  img?: string
  name: string
  date: string
  description: string
}

export function TestimonialCard({ img="https://placehold.co/56x56", name, date, description }: TestimonialCardProps) {

  return (
    <article className="w-[20rem] sm:w-[23rem] h-80 sm:h-[25rem] bg-white flex flex-col px-4 py-8 mx-4 border border-solid border-gray-400">

      <div className="flex justify-center items-center mb-8">
        <img src={img} alt="" className="rounded-full" />
        <div className="text-left ml-5 text-gray-500">
          <p className="text-xl sm:text-2xl"> Por {name} </p>
          <p className="text-sm"> {date} </p>
        </div>
      </div>

      <p className="text-base text-gray-500">
        "{description}"
      </p>
    </article>
  )
}