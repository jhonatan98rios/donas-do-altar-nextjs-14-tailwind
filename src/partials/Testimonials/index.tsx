import { Carousel } from "@/components/Carousel";
import { TestimonialCard } from "@/components/TestimonialCard";

export function Testimonials() {

  return (
    <section className="w-full text-center py-10 sm:pt-12 sm:pb-16 bg-[#eeeeff]" id="depoimentos">
      <h3 className="text-xl sm:text-2xl text-gray-500 mb-8">
        O QUE FALAM SOBRE NÓS
      </h3>

      <div className="w-full sm:w-4/5 mx-auto">
        <Carousel>

          <TestimonialCard
            name="Manuela"
            img="/testimonials/Manuela.png"
            description="Foi tudo maravilhoso, minha festa de debutante foi perfeita!"
          />

          <TestimonialCard
            name="Bruna"
            img="/testimonials/Bruna.png"
            description="A Milene e toda equipe são INCRÍVEIS!! Cuidaram de todos os detalhes do nosso casamento para que tudo saísse perfeitamente como planejamos. Nos deram super dicas durante o planejamento do nosso casamento e sempre estavam à disposição para nos ajudar a resolver qualquer empecilho. Agradecemos muito a você Mi e a toda sua equipe por todo suporte no dia mais especial de nossas vidas."
          />

          <TestimonialCard
            name="Amanda"
            img="/testimonials/Amanda.png"
            description="A Milene é uma pessoa INCRÍVEL! Sem dúvidas foi a garantia de paz nos preparativos do nosso casamento. Tornou tudo mais fácil e leve! Super acessível, sempre disponível e nos acompanhou em todos os momentos. No dia do casamento a equipe inteira foi impecável e já estamos com saudade! Só temos a agradecer por fazerem parte do nosso sonho!"
          />

          <TestimonialCard
            name="Ingrid"
            img="/testimonials/Ingrid.png"
            description="Uma amiga me indicou o trabalho da Donas do Altar e com toda certeza foi a melhor escolhe que fiz!A Mi é INCRIVEL em todos os sentidos, não tenho preocupação com absolutamente NADA e todos os processos estão caminhando perfeitamente. A Donas do altar não é só um serviço excepcional... é AMOR, dedicação e carinho por cada detalhe. SUPER, HIPER, MEGA Recomendo!!!!!"
          />

          <TestimonialCard
            name="Matheus"
            img="/testimonials/Matheus.png"
            description="Empresa maravilhosa, nos ajudaram em diversas coisas, conseguiram bons descontos e sempre indicaram fornecedores excelentes!!"
          />

          <TestimonialCard
            name="Fernanda"
            img="/testimonials/Fernanda.png"
            description="Sou ex aluna da Mi, recém formada no curso de Assessoria e Cerimonial e só tenho a agradecer toda a dedicação e entrega que ela teve comigo... <br />
            A Mi é extremamente profissional e objetiva, o método dela ensinar e passar suas experiências é seguro e passa muito do seu conhecimento. <br />
            Ela ama o que faz, compartilhar o próprio conhecimento é para os que amam <br />
            É uma satisfação poder dizer que fui aluna desta grande profissional e espero que muitas outras assessoras possam ter essa oportunidade de amadurecimento e crescimento. <br />
            Mi, muito sucesso e que Deus abençoe a sua caminhada sempre!"
          />

          <TestimonialCard
            name="Rafaela"
            img="/testimonials/Rafaela.png"
            description="O Donas do altar foi essencial no nosso evento; a Milene estava em total sincronia conosco, sempre disposta a ajudar em todos os aspectos, muito atenciosa e competente do começo ao fim.
            Um casamento possui inúmeros detalhes a serem decididos e planejados ao longo de meses que precisam ser conferidos nas vésperas e no dia do evento para sucesso total da comemoração; portanto faz-se essencial ter uma cerimonialista e sua equipe, e eu indico de olhos fechados o Donas do Altar!!!!"
          />

          <TestimonialCard
            name="Marcela"
            img="/testimonials/Marcela.png"
            description="De todas as contratações do nosso casamento, a Donas do Altar foi a melhor. Antes de começarmos a conversar com a Milene estavamos sem foco e não tinhamos ideia da quantidade de coisas que precisam de atenção, mas agora temos todo o evento resolvido a meses ainda da data, com coisas que nem sabiamos que precisavamos ou que queriamos. Nunca mais faço uma festa sem o Donas do Altar."
          />

          <TestimonialCard
            name="Priscila"
            img="/testimonials/Priscila.png"
            description={`Descobrir a Milene e a empresa "Donas do Altar" foi uma grande surpresa positiva! Ela nos orientou nos preparativos finais e fez o dia acontecer com muita competência, carinho e atenção!! Sem dúvida alguma, foi uma das nossas melhores escolhas ter alguém que se preocupava conosco e com cada detalhe! A nossa noite foi perfeita porque ela tornou realidade cada contrato, desejo e expectativa!  Indico a Milene e a empresa para os futuros casais de olhos fechados`}
          />

          <TestimonialCard
            name="Caroline"
            img="/testimonials/Caroline.png"
            description={`Não consigo imaginar o planejamento do nosso casamento sem a Milene, do Donas do Altar. Eu e meu noivo nos identificamos com ela desde a nossa primeira conversa, é uma profissional extremamente competente e que ama o que faz, o que faz total diferença. Recomendo de olhos fechados.`}
          />

          <TestimonialCard
            name="Bruno"
            img="/testimonials/Bruno.png"
            description={`Quando fui planejar meu casamento achei que daria conta de fazer tudo sozinho, impossível! Daí conheci a Milene e a chamei para um bate papo, já foi amor a primeira vista, já tinha entrevistado 4 assessoras e optei por ela pela atenção, dedicação e a vontade de querer trabalhar em meu casamento! Super indico! Ela faz o que ama e faz bem feito! Preco super justo, tira as dúvidas sempre! Não mede esforço em querer fazer o melhor.`}
          />

          <TestimonialCard
            name="Jéssica"
            img="/testimonials/Jessica.png"
            description={`A Milene, da Donas do Altar, surgiu na minha vida na hora que eu mais precisava. Trabalho de excelente qualidade, é minha mão direita e esquerda nos detalhes do casamento, super atenciosa e paciente! Eu e meu noivo somos gratos pelo trabalho dela e indicamos a empresa de olhos fechados!`}
          />

          <TestimonialCard
            name="João"
            img="/testimonials/Joao.png"
            description={`A assessoria prestada pela Milene é de extrema qualidade. Desde o primeiro dia ela realiza um excelente serviço, com alto apoio e profissionalismo. Eu e minha noiva nos sentidos totalmente amparados. Com certeza eu recomendaria o serviço dela para outras pessoas.`}
          />

          <TestimonialCard
            name="Gabriele"
            img="/testimonials/Gabriele.png"
            description={`Ter contratado a assessoria da Milene, da Donas do Altar, foi o melhor investimento que eu poderia ter feito pro meu casamento. Além dela ser super competente, é uma fofa e me ajuda em tuuuudo, desde escolha do local e do vestido até nas ideias mais mirabolantes. Eu tinha super receio de fazer uma festa de casamento porque não queria o stress e a dor de cabeça de planejar uma. Mas com a Milene o processo está sendo super tranquilo - além dela conseguir ótimas negociações com os fornecedores (coisa que eu jamais teria paciência ou persuasão suficientes pra conseguir). Como resultado,  estou 100% tranquila com o dia do casamento em si porque tenho plena confiança de que ela cuidará pra que tudo saia perfeito como eu sempre sonhei.`}
          />

        </Carousel>
      </div>
    </section>
  )
}