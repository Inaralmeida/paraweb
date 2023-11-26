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
        image="/banners/busca_Por_Apop_banner.jpg"
      />
      <StylesApoio>
        <section>
          <div className="destaque">
            <h3 className="title-destaque">
              Falta de estrutura e investimentos no Paradesporto
            </h3>
            <NameAuthor
              data="27 de Outubro de 2022"
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
              data={`Jogador de Futebol `}
              name={"Rogério Rodrigues de Almeida "}
            />
          </div>
        </section>
        <section className="textContent">
          <p className="text">
            A realidade dos para-atletas segue um rumo diferente da maioria dos
            esportistas. O baixo consumo do paradesporto afeta diretamente a
            vida destas pessoas, desde a sua infância até o pódio.
          </p>
          <p className="text">
            As escolas no Brasil, possuem poucos recursos e baixo interesse do
            Governo para introduzir um aluno portador de deficiência no esporte
            junto com as outras crianças. Se colocando a variados fatores, como:
            não dar visibilidade o suficiente e não ter condições para o suporte
            adequado. Em entrevista realizada com o atleta: Rogério Rodrigues de
            Almeida (Rogerinho R9), o maior artilheiro da história do Futebol
            para amputados, disse: “já participei de vários temas de trabalho em
            escolas e até mesmo em faculdades sobre o tema com deficiência
            física, e{" "}
            <span>
              vejo a importância de relevar e falar das pessoas com deficiência
              da inclusão para todos
            </span>{" "}
            , então creio que estamos evoluindo bastante nesse sentindo”. Nos
            dias de hoje, ainda existem escolas particulares que não são
            aceitáveis os padrões para conceder um aluno portador de
            necessidades físicas, interferindo no desenvolvimento e aprendizagem
            do mesmo.
          </p>
          <p className="text">
            Rogerinho, conta um pouco de como foi a sua infância nas escolas:
            “Minha infância foi um pouco diferente das demais crianças, tive um
            grande problema no início{" "}
            <span>
              pois a escola não queria me aceitar para estudar, não tinha
              acessibilidade para receber uma criança com deficiência
            </span>{" "}
            , só que meu pai disse ao diretor que ele queria que eu estudasse
            nessa escola pois era muito perto de casa. No início não foi fácil,
            tivemos que assinar um documento aonde meu pai era o meu responsável
            se acaso acontecesse algo, o problema era que para participar do
            intervalo teria que descer dois lances de escadas e o medo era que
            eu pudesse cair, chamaram meu pai até a escola e ali pela primeira
            vez me senti incluído, disse para eles que queria participar de tudo
            naquela escola e assim foi desde esse dia.
          </p>

          <picture >
            <img src="/apoio/RogerinhoCrianca.jpeg" alt="uma arte do jogador rogerinho quando era crianca" />
            <legend>Na arte: Rogerinho.</legend>
          </picture>

          <p className="text">
            Tive a oportunidade de estudar e na hora do intervalo poder
            participar também como as outras crianças normais. passei por vários
            momentos de preconceito no início aonde as crianças não me conhecia,
            então elas me perguntavam cadê sua perna, o que houve com você,
            aleijadinho enfim era momentos difíceis aonde as vezes ia chorando
            pra minha casa e minha mãe sempre me ajudava a passar por tudo
            isso.” Relatou Rogerinho.
          </p>

          <p className="text">
            Diversos destes atletas não vivem somente do esporte, pois não
            renderia o básico para suas necessidades.
          </p>

          <p className="text">
            As poucas oportunidades de trabalho e de carreira são outro fator
            negativo. Muitas pessoas ainda batalham para encontrar trabalho em
            suas áreas de atuação, especialmente se eles precisam dedicar muito
            tempo aos treinos e competições. Vindo a afetar sua capacidade e
            diminuindo a renda suficiente para sustento e investimento na
            carreira esportiva.
          </p>

          <p className="text">
            O pouco conhecimento do público, com os esportes adaptados, são uma
            das principais razões pela falta de interesse do mesmo. Um exemplo
            claro seria: a diferença de valores investidos e retornados das
            Olimpiadas e das Paralimpíadas. Nos jogos de Rio-2016, o Governo do
            Rio de Janeiro, precisou comprar milhares de ingressos com a
            pretensão de doar para escolas. Se não houvesse está iniciativa,
            diversos espetáculos estariam com arquibancadas vazias.
          </p>

          <picture>
            <img src="/apoio/Jogando.jpeg" alt="Rogerinho jogando futebol" />
            <legend>
              Rogerinho jogando futebol, com a arquibancada vazia.
            </legend>
          </picture>
          <p className="text">
            Segundo Rogerinho, o pouco reconhecimento se leva em conta pela
            baixa divulgação da mídia, dizendo: “Acho que o baixo conhecimento
            vem por causa da divulgação,{" "}
            <span>
              se você analisar os esportes Paralimpíco só temos notícias na
              época das paraolimpíadas
            </span>{" "}
            é muito pouco a visibilidade, e com isso a dificuldade de outras
            pessoas poderem conhecer e participar do esporte se torna difícil ,
            por isso que as palestras nas escolas , as divulgações tem que breve
            ainda mais para que possamos alcançar mais pessoas e com isso
            valorizar ainda mais o esporte para pessoas com deficiência”.
          </p>
          <p className="text">
            Com a baixa média de público no Paradesporto, a mídia e os
            patrocinadores deixam de investir visando o pouco retorno de lucros.
            E atletas que não dependem somente do esporte para sobreviver,
            iniciam sua busca por programas do Governo para receber um auxilio a
            mais, conhecido como Bolsa- atleta, que abrange milhares de
            brasileiros como “sócios” para ter poder de seu sustento. Mais de
            70% dos atletas brasileiros nas Paralimpíadas de Tóquio- 2020,
            faziam parte do programa. Perguntado a Rogerinho, sobre o sistema de
            apoio e os investimentos inseridos no esporte, respondeu: “creio que
            isso fará o esporte para pessoas com deficiência cresça ainda mais,{" "}
            <span>são poucas pessoas que hoje vivem do esporte”</span>{" "}. E
            completou: “a grande maioria tem que se dividir entre esporte e o{" "}
            <span>
              trabalho, se houver um investimento maior, uma visibilidade maior,
              iremos crescer ainda mais!
            </span>{" "}
            ”.
          </p>

          <p className="text">
            Com o decorrer do tempo, os esportes adaptados visa crescer cada vez
            mais, alcançando; escolas, projetos, telas e principalmente pessoas.
            Rogerinho, tem seu projeto pessoal, fundado em 29/12/2008, fica na
            cidade de Mogi das Cruzes em SP, com o intuito de formar pessoas em
            atletas e a defesa dos direitos sociais. Atuando dentro e fora das
            quadras, Rogerinho, comenta: “Venho lutando alguns anos para poder
            melhorar o meu projeto social. Consegui fortalecer ele por algumas
            vezes,{" "}
            <span>
              mas ainda é uma luta constante para poder manter e ajudar
              financeiramente os atletas,
            </span>{" "}
            creio que se mais empresas se interessarem pela modalidade com
            pessoas amputadas, num futuro próximo podemos até <span>viver</span>{" "}{" "}
            do esporte.”
          </p>

          <picture>
            <img src="/apoio/Instituto.jpeg" alt="" />
            <legend>participantes do Instituto R9.</legend>
          </picture>
        </section>
      </StylesApoio>
    </div>
  );
};

export default Apoio;

