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
          <TestimonialCard
            name="Bruna"
            date="24 de dezembro de 2022"
            description="A Milene e toda equipe são INCRÍVEIS!! Cuidaram de todos os detalhes do nosso casamento para que tudo saísse perfeitamente como planejamos. Nos deram super dicas durante o planejamento do nosso casamento e sempre estavam a disposição para nos ajudar a resolver qualquer empecilho. Agradecemos muito a você Mi e a toda sua equipe por todo suporte no dia mais especial de nossas vidas."
          />

          <TestimonialCard
            name="Amanda"
            date="19 de dezembro de 2022"
            description="A Milene é uma pessoa INCRÍVEL! Sem dúvidas foi a garantia de paz nos preparativos do nosso casamento. Tornou tudo mais fácil e leve! Super acessivel, sempre disponivel e nos acompanhou em todos os momentos. No dia do casamento a equipe inteira foi impecável e já estamos com saudade! Sã temos a agradecer por fazerem parte do nosso sonho! Amando Doria"
          />

          <TestimonialCard
            name="Cinthia"
            date="15 de dezembro de 2022"
            description="Super recomendo o Donas do Altar, a Milene sem dúvidas e a melhor assessora de casamento."
          />          
        </Carousel>
      </div>
    </section>
  )
}