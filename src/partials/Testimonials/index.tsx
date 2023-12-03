import { Carousel } from "@/components/Carousel";
import { TestimonialCard } from "@/components/TestimonialCard";
import { content } from './content'

export function Testimonials() {

  return (
    <section className="w-full text-center py-12 lg:py-16 bg-[#eeeeee]" id="depoimentos">
      <h3 className="text-xl sm:text-2xl text-gray-500 mb-8">
        O QUE FALAM SOBRE NÓS
      </h3>

      <div className="w-full sm:w-4/5 mx-auto">
        <Carousel>
          {
            content && content.map(post => (
              <TestimonialCard
                name={post.name}
                img={post.img}
                description={post.description}
                key={post.name}
              />
            ))
          }
        </Carousel>
      </div>
    </section>
  )
}