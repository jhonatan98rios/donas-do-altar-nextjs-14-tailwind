import { Carousel } from "@/components/Carousel";
import { ServiceCard } from "@/components/ServiceCard";

export function Services() {

  return (
    <section className="w-full text-center py-8 sm:py-12 bg-  bg-opacity-10" id="servicos">
      <h3 className="text-xl sm:text-2xl text-gray-500 mb-8"> 
        NOSSOS SERVIÇOS 
      </h3>

      <div className="h-[34rem] sm:h-[42rem] w-full sm:w-4/5 mx-auto">
        <Carousel>

          <ServiceCard 
            image="/services/assessoria_completa.png"
            alt="Imagem de um noivo declarando seus votos à sua noiva, no altar"
            title="Assessoria Completa"
            description="Esta é uma opção excelente para quem busca otimizar o tempo e garantir boas negociações. <br /> A Assessoria Completa é indicada para o cliente que está iniciando o planejamento e precisam de um auxílio profissional para organizar as ideias no papel e iniciar os preparativos até o dia do evento."
          />

          <ServiceCard 
            image="/services/assessoria_personalizada.png"
            alt="Imagem de um casal cortando o bolo"
            title="Assessoria Personalizada"
            description="A Assessoria Personalizada é indicada para clientes que iniciaram o planejamento do evento sem ajuda profissional e em algum momento do processo passaram a precisar de ajuda. <br /> Esse é um pacote ideal para quem busca  ótimas negociações, otimizar o  tempo e garantir a segurança no planejamento do seu evento."
          />

          <ServiceCard
            image="/services/assessoria_final.png"
            alt="Imagem de um casal do altar sorrindo"
            title="Assessoria Final"
            description="A Assessoria Final é indicada para clientes que tem habilidade para planejar um evento sem ajuda profissional e necessitam de ajuda na coordenação no dia do evento. <br /> A Assessoria Final começa três meses antes do seu evento e nosso time vai organizar todas as contratações feitas até então."
          />

          <ServiceCard 
            image="/services/curso_de_assessoria.png"
            alt="Imagem de uma mesa de um buffet com flores e garrafas de espumante"
            title="Curso de Assessoria"
            description="Um curso profissionalizante que foi criado com o objetivo de mudar o mercado de eventos sociais e entregar para os clientes excelência e resultado. <br /> Para quem busca ser um profissional de eventos, esse é o curso que além de te preparar para o mercado vai te capacitar para todos os desafios que é ser um empreendedor de excelência. "
          />

          <ServiceCard 
            image="/services/debutantes.png"
            alt="Imagem de uma jovem de vestido longo dançando com um jovem de terno"
            title="Debutantes"
            description="Temos pacotes exclusivos para festa de debutante onde vamos levantar o perfil da aniversariante e dar personalidade para uma festa tão importante como essa."
          />

          <ServiceCard 
            image="/services/eventos_sociais_e_coorporativos.png"
            alt="Uma mulher de vestido rosa, segurando um microfone e apresentando um evento enquanto lê um roteiro no celular"
            title="Eventos Sociais e Coorporativos"
            description="Nosso time é preparado para atender qualquer tipo de evento, seja ele corporativo ou social. Garantimos segurança e qualidade desde o planejamento até o grande dia."
          />
          
        </Carousel>
      </div>
    </section>
  )
}