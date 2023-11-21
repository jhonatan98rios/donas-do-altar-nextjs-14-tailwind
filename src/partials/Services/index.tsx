import { Carousel } from "@/components/Carousel";
import { ServiceCard } from "@/components/ServiceCard";
import { baseImage } from "@/utils/baseImage";

export function Services() {

  return (
    <section className="w-full text-center py-8 bg-white" id="servicos">
      <h3 className="text-xl sm:text-2xl text-gray-500 mb-8"> 
        NOSSOS SERVIÇOS 
      </h3>

      <div className="h-[34rem] sm:h-[42rem] w-full sm:w-4/5 mx-auto">
        <Carousel>

          <ServiceCard 
            baseImage={
              baseImage(
                [
                  { src: "/services/assessoria_completa.png, /services/assessoria_completa@2x.png 2x", query: '(min-width: 769px)' },
                  { src: "/services/mobile/assessoria_completa.png, /services/mobile/assessoria_completa@2x.png 2x" },
                ],
                "", 
                ""
              )
            }
            title="Assessoria Completa"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ServiceCard 
            baseImage={
              baseImage(
                [
                  { src: "/services/assessoria_personalizada.png, /services/assessoria_personalizada@2x.png 2x", query: '(min-width: 769px)' },
                  { src: "/services/mobile/assessoria_personalizada.png, /services/mobile/assessoria_personalizada@2x.png 2x" },
                ], 
                "", 
                ""
              )
            }
            title="Assessoria Personalizada"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ServiceCard 
            baseImage={
              baseImage(
                [
                  { src: "/services/assessoria_final.png, /services/assessoria_final@2x.png 2x", query: '(min-width: 769px)' },
                  { src: "/services/mobile/assessoria_final.png, /services/mobile/assessoria_final@2x.png 2x" },
                ], 
                "", 
                ""
              )
            }
            title="Assessoria Final"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ServiceCard 
            baseImage={
              baseImage(
                [
                  { src: "/services/curso_de_assessoria.png, /services/curso_de_assessoria@2x.png 2x", query: '(min-width: 769px)' },
                  { src: "/services/mobile/curso_de_assessoria.png, /services/mobile/curso_de_assessoria@2x.png 2x" },
                ], 
                "", 
                ""
              )
            }
            title="Curso de Assessoria"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ServiceCard 
            baseImage={
              baseImage(
                [
                  { src: "/services/debutantes.png, /services/debutantes@2x.png 2x", query: '(min-width: 769px)' },
                  { src: "/services/mobile/debutantes.png, /services/mobile/debutantes@2x.png 2x" },
                ], 
                "", 
                ""
              )
            }
            title="Debutantes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ServiceCard 
            baseImage={
              baseImage(
                [
                  { src: "/services/eventos_sociais_e_coorporativos.png, /services/eventos_sociais_e_coorporativos@2x.png 2x", query: '(min-width: 769px)' },
                  { src: "/services/mobile/eventos_sociais_e_coorporativos.png, /services/mobile/eventos_sociais_e_coorporativos@2x.png 2x" },
                ], 
                "", 
                ""
              )
            }
            title="Eventos Sociais e Coorporativos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          
        </Carousel>
      </div>
    </section>
  )
}