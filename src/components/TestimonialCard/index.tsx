export function TestimonialCard() {

  return (
    <article className="w-[20rem] sm:w-[23rem] h-80 sm:h-96 bg-white flex flex-col px-4 py-8 mx-4 border border-solid border-gray-400">

      <div className="flex justify-center items-center mb-8">
        <img src="https://placehold.co/56x56" alt="" className="rounded-full" />
        <div className="text-left ml-5 text-gray-500">
          <p className="text-2xl"> Nome </p>
          <p className="text-sm"> 19 de dezembro de 2022 </p>
        </div>
      </div>

      <p className="text-base sm:text-xl text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </article>
  )
}