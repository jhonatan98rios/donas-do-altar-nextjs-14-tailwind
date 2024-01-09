import { Carousel } from "@/components/Carousel";
import { ServiceCard } from "@/components/ServiceCard";

export function Services() {

  return (
    <section className="w-full text-center py-12 lg:py-16 bg-[#eeeeee]" id="servicos">
      <h3 className="text-xl sm:text-2xl text-gray-500 mb-8"> 
        NOSSOS SERVIÇOS 
      </h3>

      <div className="h-[34rem] sm:h-[34rem] w-full sm:w-4/5 mx-auto">
        <Carousel>

          <ServiceCard 
            image="/services/assessoria_completa.png"
            alt="Casal abraçados dançando"
            title="Assessoria Completa - Donas do altar"
            description="Esta é uma opção excelente para quem busca otimizar o tempo e garantir boas negociações. <br />
            A Assessoria Completa é indicada para o cliente que está iniciando o planejamento e precisa de um auxílio profissional para organizar as ideias, buscar e escolher fornecedores, ter auxílio nas negociações e ter a certeza que do planejamento ao dia do evento não terá preocupações. "
          />

          <ServiceCard 
            image="/services/assessoria_personalizada.png"
            alt="Imagem de um casal cortando o bolo"
            title="Assessoria Personalizada - Donas do altar"
            description="Essa é uma ótima opção para quem busca excelentes negociações, otimização do tempo e garantia de segurança no planejamento do seu evento. <br />
            A Assessoria Personalizada é indicada para clientes que iniciaram o planejamento do evento sem ajuda profissional e em algum momento do processo passaram a precisar de auxílio. "
          />

          <ServiceCard
            image="/services/assessoria_final.png"
            alt="Imagem de um casal do altar sorrindo"
            title="Assessoria Final - Donas do altar"
            description="A Assessoria Final é indicada para clientes que tem habilidade para planejar um evento sem ajuda profissional, porém vão precisar de auxílio nos últimos meses que antecedem o grande dia"
          />

          <ServiceCard 
            image="/services/curso_de_assessoria.png"
            alt="Imagem de uma mulher arrumando "
            title="Curso de Assessoria - Donas do altar"
            description="Um curso profissionalizante que foi criado com o objetivo de mudar o mercado de eventos sociais e entregar para os clientes bom atendimento e resultado. <br />
            Para quem busca ser um profissional de eventos, esse é o curso que além de te preparar para o mercado vai te capacitar para todos os desafios que é ser um empreendedor de excelência. "
          />

          <ServiceCard 
            image="/services/debutantes.png"
            alt="Imagem de uma jovem de vestido longo dançando com um jovem de terno"
            title="Debutantes - Donas do altar"
            description="Temos pacotes exclusivos para festa de debutante onde vamos levantar o perfil da aniversariante e dar personalidade para uma festa tão importante como essa."
          />

          <ServiceCard 
            image="/services/eventos_sociais_e_corporativos.png"
            alt="Uma mulher de vestido rosa, segurando um microfone e apresentando um evento enquanto lê um roteiro no celular"
            title="Eventos Sociais e Corporativos - Donas do altar"
            description="Nosso time é preparado para atender qualquer tipo de evento, seja ele corporativo ou social. Temos mais de 15 anos de experiência em eventos coorporativos e ao longo da nossa carreira atendemos marcas importantes."
          />
          
        </Carousel>
      </div>
    </section>
  )
}