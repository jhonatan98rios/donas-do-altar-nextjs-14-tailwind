import { Carousel } from "@/components/Carousel";
import { TestimonialCard } from "@/components/TestimonialCard";

export function Testimonials() {

  return (
    <section className="w-full h-[34rem] text-center py-10 bg-white">
      <h3 className="text-2xl text-gray-400 mb-8"> 
        DEPOIMENTOS 
      </h3>

      <div className="h-[12rem] w-4/5 mx-auto">
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