import { Carousel } from "@/components/Carousel";
import { ServiceCard } from "@/components/ServiceCard";

export function Services() {

  return (
    <section className="w-full text-center py-8 bg-white" id="servicos">
      <h3 className="text-xl sm:text-2xl text-gray-500 mb-8"> 
        NOSSOS SERVIÇOS 
      </h3>

      <div className="h-[34rem] sm:h-[42rem] w-full sm:w-4/5 mx-auto">
        <Carousel>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </Carousel>
      </div>
    </section>
  )
}