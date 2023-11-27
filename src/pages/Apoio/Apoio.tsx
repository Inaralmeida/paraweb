import { useMediaQuery } from "react-responsive";
import Avatar from "../../components/Avatar/Avatar";
import Banner from "../../components/Banner/Banner";
import NameAuthor from "../../components/NameAuthor/NameAuthor";
import { StylesApoio } from "./apoio.styles";

const Apoio = () => {
  const isMobile = useMediaQuery({ maxWidth: "623px" });
  const isTablet = useMediaQuery({ maxWidth: "780px" });

  return (
    <div>
      <Banner
        title="Busca por apoio"
        image="/banners/busca_Por_Apop_banner.jpeg"
      />
      <StylesApoio>
        <section>
          <div className="destaque">
            <h3 className="title-destaque">
              Os poucos valores investidos afetam diretamente a vida dos
              atletas.
            </h3>
            <NameAuthor
              data="27 de novembro de 2022"
              name={`Giovanni V. Panatto`}
            />
          </div>
          <div className="data-interviewed">
            <Avatar
              alt={`O atleta Rogerinho de frente para a câmera utilizando um uniforme branco e preto apontando para a câmera, dentro de um campo de Futebol, com uma bola no pé.`}
              img={`/apoio/rogerinho.jpeg`}
              size={isMobile || isTablet ? 200 : 350}
            />
            <NameAuthor
              data={`Jogador de Futebol de amputados`}
              name={"Rogério Rodrigues de Almeida "}
            />
          </div>
        </section>
        <section className="textContent">
          <h3 className="title-destaque">O baixo consumo do paradesporto</h3>
          <p className="text">
            A falta de apoio financeiro do paradesporto revela um cenário
            desafiador, no qual os atletas enfrentam obstáculos para obter o
            apoio e o reconhecimento que merecem. A baixa visibilidade,
            investimentos limitados e barreiras sociais ainda persistem,
            impedindo o desenvolvimento esportivo que era para ser tão valioso.
            No entanto, ao explorarmos iniciativas promissoras, como projetos
            que buscam parcerias e a crescente participação de patrocinadores,
            vemos um futuro onde a inclusão e a valorização do paradesporto
            sejam prioridades.
          </p>
          <p className="text">
            A falta de visibilidade afeta diretamente a vida destas pessoas,
            desde a sua infância até o pódio. As escolas no Brasil possuem
            poucos recursos para introduzir um aluno portador de deficiência no
            esporte, junto com as outras crianças. Segundo dados da analises do
            Ministério de Educação (MEC) e do Instituto Nacional de Estudos e
            Pesquisas Educacionais Anísio Teixeira (Inep), existem mais de{" "}
            <span>um milhão de alunos com deficiência</span> matriculados no
            ensino básico, São 47.933 instituições de ensino que não possuem
            qualquer tipo de item de acessibilidade, como: rampas, corrimões,
            elevadores, pisos táteis ou sinais sonoros. Esse número corresponde
            a 26,9% do total de escolas brasileiras. (AGÊNCIA DE NOTÍCIAS CEUB –
            2023)
          </p>
          <p className="text">
            Estes dados podem ser associados a diversos fatores, como não dar
            visibilidade o suficiente e não ter condições para o suporte
            adequado.
          </p>

          <p className="text">
            Em entrevista realizada com o atleta Rogério Rodrigues de Almeida,
            mais conhecido como Rogerinho, o maior artilheiro mundial do Futebol
            para amputados, nos mostra como ainda estamos atrasados, pois desde
            sua época na escola, não havia o suporte necessário: "Minha infância
            foi um pouco diferente das demais crianças. Tive um grande problema
            no início,{" "}
            <span>pois a escola não queria me aceitar para estudar</span>. Não
            tinha acessibilidade para receber uma criança com deficiência. No
            início não foi fácil; tivemos que assinar um documento onde meu pai
            era o meu responsável, caso acontecesse algo. Passei por vários
            momentos de preconceito no início.” relatou Rogerinho.
          </p>
          <picture>
            <img
              src="/apoio/RogerinhoCrianca.jpeg"
              alt="Uma imagem de Rogerinho criança com a frase ao lado “Uma criança com um sonho tem tudo o que precisa”"
            />
            <legend>
              Na arte: Uma imagem de Rogerinho criança com a frase ao lado “Uma
              criança com um sonho tem tudo o que precisa”.
            </legend>
            <legend>
              (Arte criada pelo Rogerinho e disponibilizada pelo mesmo)
            </legend>
          </picture>

          <p className="text">
            O pouco conhecimento do público em relação aos esportes adaptados é
            uma das principais razões pela falta de interesse. Um exemplo claro
            seria a diferença de valores investidos e retornados nas Olimpíadas
            e nas Paralimpíadas.
          </p>

          <p className="text">
            Em 2008, as Olimpíadas de Pequim, China, tinham 55 empresas como
            patrocinadores oficiais (COMITÊ OLÍMPICO INTERNACIONAL, 2008),
            enquanto nos jogos Paralímpicos teve apenas 31 empresas nessas
            mesmas condições (COMITÊ PARALÍMPICO INTERNACIONAL, 2008). Ambos têm
            o mesmo objetivo e foram organizados pelos mesmos órgãos associados,
            e vale ressaltar a diferença da importância comercial entre os dois
            Jogos.
          </p>

          <p className="text">
            Segundo o portal Terra, nos Jogos Rio-2016, o Governo do Rio de
            Janeiro precisou comprar 70% dos ingressos com a intenção de doar
            para funcionários públicos e alunos de escolas públicas. Isso porque
            a venda de entradas estava muito abaixo do esperado. Se não houvesse
            esta iniciativa da Prefeitura, diversos jogos estariam com
            arquibancadas vazias.
          </p>
          <p className="text">
            Já nas Paralimpíadas de Tóquio 2020, não houve público presente, mas
            dos 309 atletas brasileiros, 131 não tinham patrocínio algum, 36
            realizaram permutas, 41 fizeram vaquinhas para arrecadar dinheiro e
            33 conciliaram o esporte com outros empregos. (ESTADO DE MINAS -
            20/05/2022)
          </p>
          <picture>
            <img src="/apoio/arquibancada_vazia.jpeg" alt="" />
            <legend>
              Uma arquibancada vazia, composta por cadeiras da cor laranja.
            </legend>
            <a href="https://br.freepik.com/fotos-gratis/linhas-de-arquibancadas-vermelhas-de-vista-frontal_32502906.htm#query=arquibancada%20vazia&position=46&from_view=search&track=ais&uuid=0c1c01a2-73d9-4429-854d-e57ae3276e4a">
              Freepik
            </a>
            Esta imagem foi criada com os recursos de: Freepik.com
          </picture>

          <p className="text">
            Segundo o nosso primeiro entrevistado, o pouco reconhecimento se
            leva em conta também, pela baixa divulgação da mídia, dizendo: “Acho
            que o baixo conhecimento vem por causa da divulgação,{" "}
            <span>
              se você analisar os esportes Paraolímpico só temos notícias na
              época das paraolimpíadas
            </span>{" "}
            é muito pouco a visibilidade, e com isso a dificuldade de outras
            pessoas poderem conhecer e participar do esporte se torna difícil,
            por isso que as palestras nas escolas , as divulgações tem que breve
            ainda mais para que possamos alcançar mais pessoas e com isso
            valorizar ainda mais o esporte para pessoas com deficiência”.
          </p>

          <p className="text">
            Com a baixa média de público no Paradesporto, grande parte da mídia
            e de patrocinadores não investem, e atletas que não dependem somente
            do esporte para sobreviver iniciam sua busca por programas do
            Governo para receber auxílio, conhecido como Bolsa-atleta. Este
            programa abrange milhares de brasileiros contemplados para ter poder
            de seu sustento. No total, 95% dos atletas brasileiros nas
            Paraolimpíadas de Tóquio-2020 faziam parte de programas para o
            recebimento de bolsas públicas (AGÊNCIA BRASIL EBC 2021).
          </p>

          <p className="text">
            A lista apresenta o nome de mais de 7 mil contemplados no programa,
            os mesmos que estarão aptos para usufruir deste benefício por 1 ano.
            No último ano, foi destinado mais de R$ 70 milhões para o pagamento
            de todos os atletas. Os pagamentos são classificados por categorias:
            a categoria Atleta de Base e Estudantil recebe R$ 370,00
            mensalmente, o grupo Nacional recebe cerca de R$ 925,00, o grupo
            internacional R$ 1.850, e o grupo olímpico ou paralímpico cerca de
            R$ 3.100 mensais. A categoria Atleta Pódio oferece entre R$ 5.000 e
            R$ 15.000 mensalmente, para que com o objetivo estejam entre os 20
            primeiros no ranking mundial da sua específica modalidade. (GE GLOBO
            – 2023).
          </p>
          <p className="text">
            Para o ano de 2023, os recursos para pagamento das bolsas no
            Orçamento-Geral da União, pelo Ministério do Esporte, projetaram
            cerca de R$ 120 milhões de despesas para o Bolsa-Atleta até o início
            de 2024. (GE GLOBO – 2023)
          </p>
          <p className="text">
            Com a difícil visibilidade da mídia, dos patrocinadores e do
            público, grande parte dos atletas iniciaram sua carreira esportiva
            se destacando em campanhas, eventos e instituições. Na cidade de
            Mogi das Cruzes, interior de São Paulo, há o Instituto R9, focado em
            futebol para amputados. A instituição está ativa há mais de 14 anos.
            O projeto foi fundado para desenvolver atividades visando ajudar
            atletas e outras pessoas com interesse de participar e praticar o
            esporte.
          </p>
          <picture>
            <img
              src="/apoio/Instituto.jpeg"
              alt="ao lado esquerdo a equipe de amputados da Portuguesa e do lado direito a equipe do Corinthians, ambas dentro do campo de futebol. 
"
            />
            <legend>
              ao lado esquerdo a equipe de amputados da Portuguesa e do lado
              direito a equipe do Corinthians, ambas dentro do campo de futebol.
            </legend>
            <legend>
              (Imagem do acervo pessoal disponibilizada pelo Instituto R9)
            </legend>
          </picture>

          <p className="text">
            Conforme seu crescimento, a instituição está buscando novas
            parcerias com as leis de incentivo ao esporte para melhorar sua
            estrutura e ajudar diretamente na vida pessoal e profissional dos
            atletas. A organização também prevê em breve montar a primeira
            equipe de crianças de 6 a 13 anos de idade do Instituto.
          </p>

          <p className="text">
            Os patrocinadores são a base do projeto. Com mais de uma década de
            instituto, sem os investimentos de fora, seria inviável desenvolver
            e manter o esporte. A instituição afirma que tem avançado bastante
            na relação e parceria com o Governo, acreditando sempre que, para
            ficar mais forte, "
            <span>a ajuda do estado e do público é fundamental</span> para fazer
            juntos levar o esporte para todas as pessoas e, principalmente, os
            futuros atletas.” Afirmou Rogerio, representante do instituto.
          </p>
          <p className="text">
            Os patrocinadores costumam ser uma empresa ou pessoa na qual
            disponibilizam um recurso financeiro para que os times ou atletas
            tenham mais sustentabilidade para a prática de seus esportes. É
            oferecido um auxílio que ajuda o esportista a continuar suas
            atividades. E conforme o acordo, os atletas ou os times precisam
            vestir ou divulgar sobre esta marca ou pessoa. Além de ajudar
            financeiramente as instituições, times e atletas, após vinculação da
            sua marca ou nome a um atleta ou equipe, os patrocinadores ganham
            mais visibilidade. Além disso, a empresa também começa a ser vista
            como apoiadora do esporte, podendo obter outros benefícios nesta
            relação.
          </p>

          <p className="text">
            Também na cidade de Mogi, encontramos a equipe da Portuguesa Futebol
            de amputados, equipe que está sendo grande destaque nos últimos
            campeonatos da modalidade. Em entrevista realizada com Tuany Maura
            Gonfiantini, representante do patrocinador oficial do time (Sicoob
            Metalcred), foram produzidas algumas questões referentes ao baixo
            consumo e baixos investimentos no paradesporto.
          </p>

          <picture>
            <img
              src="/apoio/goleiro.jpeg"
              alt="Na imagem, o goleiro da equipe da Portuguesa de amputados praticando futebol, utilizando um uniforme amarelo, chuteiras vermelhas, e atrás o cartaz do patrocinador oficial da equipe Sicoob Metalcred.
(Imagem disponibilizada pelo Acervo pessoal do patrocinador)
"
            />
            <legend>
              Na imagem, o goleiro da equipe da Portuguesa de amputados
              praticando futebol, utilizando um uniforme amarelo, chuteiras
              vermelhas, e atrás o cartaz do patrocinador oficial da equipe
              Sicoob Metalcred.
            </legend>
            <legend>
              (Imagem disponibilizada pelo Acervo pessoal do patrocinador)
            </legend>
          </picture>

          <p className="text">
            “Acredito que quanto mais as pessoas tomarem conhecimento das causas
            PCD e da{" "}
            <span>importância que o esporte traz para essas pessoas</span>,
            maior seria a pressão da sociedade nas corporações para incentivar
            os esportes paralímpicos.” Completou, Tuany: “Nosso objetivo é
            ajudar financeiramente os jogadores, fazendo com que tenham uma
            melhor <p>qualidade de vida para si e suas famílias</p>. Além disso,
            pretendemos ajudar na promoção do time e da importância do esporte
            paralímpico”.
          </p>

          <picture>
            <img
              src="/apoio/atletacorrendo.jpeg"
              alt="Atleta em cima de sua cadeira de rodas personalizada com um pneu na frente praticando corrida em uma pista de atletismo
"
            />
            <legend>
              Atleta em cima de sua cadeira de rodas personalizada com um pneu
              na frente praticando corrida em uma pista de atletismo
            </legend>
            <a href="https://br.freepik.com/fotos-gratis/atleta-paraolimpico-participando-de-uma-competicao_72627492.htm#query=paralimpiadas&position=17&from_view=search&track=ais&uuid=1ea1d5a0-b16d-465a-939d-783388592920">
              Freepik
            </a>
            <legend>
              Esta imagem foi criada com os recursos de: Freepik.com
            </legend>
          </picture>

          <p className="text">
            À medida que instituições e governos se unem em prol do
            desenvolvimento desse setor, a esperança é que mais recursos sejam
            direcionados para melhorar a infraestrutura, proporcionar
            oportunidades e ampliar a visibilidade desses atletas incríveis. O
            exemplo de projetos como o Instituto R9 e equipes como a Portuguesa
            Futebol de amputados destaca a importância vital do apoio da
            comunidade, empresas e do governo para impulsionar o paradesporto.
          </p>

          <p className="text">
            Neste cenário, é importante ampliar a compreensão coletiva sobre a
            relevância do paradesporto, não apenas como a expressão de
            superação, assim como grandes portais fazem, mas sim, como um meio
            de construir uma sociedade mais inclusiva e igualitária. Ao
            reconhecer o valor dessas práticas esportivas adaptadas, podemos
            coletivamente impulsionar mudanças positivas, transformando o baixo
            consumo do paradesporto em uma narrativa de crescimento e
            reconhecimento merecido.
          </p>
        </section>
      </StylesApoio>
    </div>
  );
};

export default Apoio;

