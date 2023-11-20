import { Carousel } from "@/components/Carousel";
import { TestimonialCard } from "@/components/TestimonialCard";

export function Testimonials() {

  return (
    <section className="w-full h-[28rem] sm:h-[34rem] text-center py-10 bg-white" id="depoimentos">
      <h3 className="text-xl sm:text-2xl text-gray-500 mb-8"> 
        DEPOIMENTOS 
      </h3>

      <div className="h-[12rem] w-full sm:w-4/5 mx-auto">
        <Carousel>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Carousel>
      </div>
    </section>
  )
}