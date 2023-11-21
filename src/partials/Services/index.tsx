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

          <ServiceCard 
            image={"/services/assessoria_completa.png"}
            alt=""
            title="Assessoria Completa"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ServiceCard 
            image={"/services/assessoria_personalizada.png"}
            alt=""
            title="Assessoria Personalizada"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ServiceCard
            image={"/services/assessoria_final.png"}
            alt=""
            title="Assessoria Final"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ServiceCard 
            image={"/services/curso_de_assessoria.png"}
            alt=""
            title="Curso de Assessoria"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ServiceCard 
            image={"/services/debutantes.png"}
            alt=""
            title="Debutantes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ServiceCard 
            image={"/services/eventos_sociais_e_coorporativos.png"}
            alt=""
            title="Eventos Sociais e Coorporativos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          
        </Carousel>
      </div>
    </section>
  )
}