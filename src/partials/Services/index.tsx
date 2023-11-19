import { Carousel } from "@/components/Carousel";

export function Services() {

  return (
    <section className="w-full text-center py-8">
      <div>
        <h3 className="text-2xl text-gray-400 mb-8"> 
          NOSSOS SERVIÇOS 
        </h3>

        <div className="h-96 w-full">
          <Carousel />
        </div>
      </div>
    </section>
  )
}