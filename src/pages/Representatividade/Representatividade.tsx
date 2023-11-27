import Banner from "../../components/Banner/Banner";
import { useMediaQuery } from "react-responsive";
import NameAuthor from "../../components/NameAuthor/NameAuthor";
import { StylesRepresentatividade } from "./representatividade.styles";

const Representatividade = () => {
  const isMobile = useMediaQuery({ maxWidth: "623px" });
  const isTablet = useMediaQuery({ maxWidth: "780px" });

  return (
    <div>
      <Banner
        title="Representatividade feminina"
        image="/banners/busca_representatividade.jpeg"
      />
      <StylesRepresentatividade>
        <section>
          <div className="destaque">
            <h3 className="title-destaque">
              Empoderando o futuro: A ascensão das mulheres nos esportes
              paralímpicos
            </h3>
            <NameAuthor
              data="27 de novembro de 2023"
              name={`Rebeca Barreto da Silva
              `}
            />
          </div>
        </section>
        <section className="textContent">
          <p className="text">
            Os Jogos Paralímpicos são um evento esportivo de prestígio global
            que celebra a excelência de atletas com deficiência. Apesar do
            progresso notável em termos de inclusão nos últimos anos, a
            representatividade feminina na competição ainda é uma questão que
            merece destaque.{" "}
          </p>
          <p className="text">
            Os Jogos Olímpicos de Tóquio estabeleceram um novo recorde de
            participação feminina. Apesar de os Jogos Paralímpicos não terem
            alcançado esse feito, já houve uma notável progressão na
            representação feminina. Em 2020, mais de 42% dos competidores eram
            mulheres, marcando um aumento de mais de 10% em relação à edição
            anterior dos jogos, realizada no Rio de Janeiro em 2016, segundo o
            Comitê Paralímpico Brasileiro.{" "}
          </p>
          <p className="text">
            A representatividade feminina nos Jogos Paralímpicos é fundamental
            para inspirar a próxima geração de atletas. Quando as meninas veem
            mulheres com deficiência competindo em alto nível e alcançando o
            sucesso, isso as encoraja a buscar seus próprios sonhos atléticos. A
            presença de mulheres nos esportes paralímpicos ajuda a quebrar
            preconceitos de gênero e a promover a autoconfiança das jovens.{" "}
          </p>
          <p className="text">
            Além disso, a representatividade feminina nas Paralimpíadas
            contribui para desafiar as percepções tradicionais de beleza e
            força, demonstrando que a diversidade de corpos é algo a ser
            celebrado, e não escondido ou envergonhado. Destacando-se como uma
            referência na atual geração, a nadadora Carol Santiago compartilha
            insights valiosos sobre seu minucioso processo de preparação para
            competições, além de apresentar sua perspectiva sobre como gerencia
            a pressão “A minha rotina de treinos é bastante intensa desde quando
            eu entrei para o esporte de alto rendimento. Eu tenho períodos de
            treinamentos todos os dias de manhã, 3 três na semana durante o
            período da tarde, mais três dias de academia.” conta a atleta.
          </p>
          <p className="text">
            Carol nasceu com a síndrome de Morning Glory, uma condição congênita
            na retina que afeta seu campo de visão. Ela ressalta a raridade
            dessa condição, tornada ainda mais incomum pelo fato de afetar ambos
            os olhos. Carol compartilha que, durante os treinos, ao atingir o
            ápice do cansaço ou ao realizar esforços intensos, enfrenta uma
            redução significativa na visão, complicando ainda mais seu processo
            de treinamento.{" "}
          </p>

          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/VplRCCV6w_U?si=znjAnCtv97SRxgsI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <p className="text">
            A nadadora compartilha detalhes sobre sua rotina de treinamento
            intensivo desde o início de sua jornada no esporte de alto
            rendimento. Antes de iniciar suas sessões de treino, Carol realiza
            uma série de preparativos, incluindo pesagem, aquecimento, sessões
            de fisioterapia, atenção especial à nutrição e a garantia de um sono
            regulado. Ela destaca a importância de contar com todos os
            mecanismos necessários para realizar treinos eficazes, citando, como
            exemplo, a utilização de taper (um dispositivo parecido com uma vara
            de pesca utilizada nos treinos para sinalizar que o atleta está
            chegando próximo à borda) durante as sessões de treino, com o apoio
            essencial da comissão técnica.
          </p>
          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/4QJXcDqhrpM?si=RhzkLr1R9wlAOfgC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            Carol destaca a relevância do acompanhamento psicológico durante sua
            preparação para competições, ressaltando que começou a priorizar
            essa dimensão especialmente após o Campeonato Mundial de Natação
            Paralímpica de 2019. Ela observa que, embora estivesse bem preparada
            fisicamente para o evento, reconhece a necessidade de uma preparação
            mental igualmente sólida. A atleta reforça ainda que tanto ela
            quanto a comissão técnica compartilham uma preocupação mútua com a
            recuperação, reconhecendo a integralidade do cuidado necessário para
            um desempenho consistente e duradouro.{" "}
          </p>

          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/ZYsfHVFgzcI?si=K0d3Yn7dRdaLAA8g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            A intensa pressão sobre atletas de alto rendimento é uma realidade
            comum, especialmente em grandes competições. Carol conta que,
            frequentemente, em entrevistas ou conversas, as pessoas perguntam:
            "Vai trazer uma medalha de ouro?" ou "Quantas medalhas serão
            agora?". Ela revela que, em sua primeira competição de grande porte,
            sentiu o peso dessa pressão. No entanto, ao cuidar de sua saúde
            mental, Carol aprendeu a lidar com essas expectativas. Hoje, em vez
            de encarar como pressão, ela vê essas perguntas como um estímulo.{" "}
          </p>

          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height="400"
            src="https://www.youtube.com/embed/hUVX5ngPpI4?si=K1w0IhOboZi1_5sp"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            Aos dezessete anos, Carol enfrentou um período de completa cegueira
            durante oito meses, causado pelo acúmulo de água na retina. Esse
            desafio levou-a a interromper sua prática na natação. No entanto,
            uma década depois, aos 27 anos, ela decidiu retornar ao esporte.
            Carol compartilha sua experiência de readaptação, destacando as
            dificuldades em encontrar uma posição que aprimorasse seu desempenho
            e sua resistência ao uso do taper. Ela reconhece que, apesar da
            resistência inicial, o taper contribuiu significativamente para
            melhorar seu rendimento. Carol também comenta sobre seus
            revezamentos, enfatizando a importância do auxílio de outra pessoa
            para soltá-la na água no momento preciso, garantindo a melhor
            performance possível.{" "}
          </p>
          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/mL9H-jeIMLQ?si=5dZGRdTFtjeGTdUL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            A nadadora destaca como a síndrome de Morning Glory se tornou uma
            ferramenta para conscientização e ampliação de sua carreira.
            Santiago considera que a maneira como ela pratica o esporte de alto
            rendimento é uma mensagem poderosa que transcende a síndrome.{" "}
          </p>
          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/IvKWvcUGmDQ?si=Qs0Qp-4V-4_JnU8I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <h2>Além do Tatame: uma jornada de disciplina e conquistas </h2>

          <p className="text">
            Assim como Carol Santiago, a taekwondista Debora Menezes segue uma
            rotina intensa de preparação para as competições. Ao descrever seu
            dia a dia, ela destaca minuciosamente os diversos elementos que
            compõem sua preparação, abrangendo desde o treinamento físico até
            cuidados médicos, nutricionais e psicológicos.
          </p>
          <p className="text">
            Debora compartilha insights sobre sua agenda, revelando que dedica
            três dias por semana ao treinamento físico, realiza duas sessões
            semanais de acompanhamento médico, incluindo fisioterapia, e reserva
            um dia para consultas com a psicóloga. Além disso, ela ressalta a
            importância do treino específico de taekwondo, que ocupa sua agenda
            de segunda a sábado.{" "}
          </p>
          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/psiL1pzQZ2s?si=atn1fN76-QYLqjrm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            Debora revela que ingressou no esporte por puro hobby. No entanto, à
            medida que aprofundava seu conhecimento sobre essa arte marcial, sua
            paixão pelo taekwondo cresceu, levando-a a fazer a transição para o
            cenário de alto rendimento. Ela ressalta que a perspectiva de
            participar dos Jogos Paralímpicos foi o fator motivador que a
            manteve dedicada a essa disciplina, uma oportunidade que não havia
            encontrado em outras modalidades.{" "}
          </p>
          <p className="text">
            Anteriormente, a atleta chegou a jogar vôlei sentado, mas não se
            adaptou. Optou, então, por migrar para o atletismo e obteve bons
            resultados na modalidade ao longo de um ano, antes de finalmente
            ingressar no taekwondo. Além disso, Debora chegou a praticar
            futebol, uma de suas grandes paixões, e considera ter aprendido
            muitas lições nesse esporte, como o trabalho em equipe e a
            objetividade.{" "}
          </p>
          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/YkDYW1cGmdc?si=ABF9YC5WZ6Bq8ut7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            Em relação à sua jornada no futebol, Debora compartilha as
            dificuldades que enfrentou ao longo dos 12 anos dedicados ao
            esporte, especialmente em meio ao preconceito que permeava a ideia
            de que mulheres não deveriam integrar o universo do futebol. Mesmo
            praticando o esporte atualmente, ela reflete sobre os desafios que
            enfrentou durante sua trajetória, destacando o preconceito, em sua
            maioria, de homens que utilizavam termos depreciativos, como "mulher
            macho", na tentativa de desacreditar suas habilidades.{" "}
          </p>
          <p className="text">
            {" "}
            Debora questiona essa mentalidade, interrogando porque, em um país
            tão apaixonado pelo futebol, as mulheres deveriam ser excluídas
            dessa prática. Ela ressalta que não é a modalidade, o esporte ou a
            profissão que define os espaços que as mulheres podem ocupar,
            afirmando: "Temos o direito de estar onde desejamos e onde nos
            sentimos à vontade".{" "}
          </p>
          <p className="text">
            Ela observa que, por ser uma mulher lésbica, não enfrentou
            preconceito em nenhum outro esporte que praticou, destacando que a
            resistência foi específica no contexto do futebol.{" "}
          </p>
          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/_CIrPPahmeQ?si=cPvewgjPX1iorTAF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            Debora compartilha sua perspectiva sobre motivação, enfatizando que
            ao longo de sua trajetória, ela sempre enfrentou desafios para
            conquistar seus objetivos. Destaca sua formação em educação física e
            o reconhecimento alcançado dentro do esporte como uma grande
            felicidade em sua vida. Além disso, ela encoraja as pessoas a não
            desistirem de seus sonhos, especialmente àqueles que gostariam de
            ingressar no mundo do esporte de alto rendimento.{" "}
          </p>
          <p className="text">
            Ela enfatiza a importância de abraçar essa jornada com paixão e
            dedicação, incentivando que, mesmo nos dias mais difíceis, seja
            sempre buscado dar o melhor de si. Para Debora, a mensagem é clara:
            persistir diante dos desafios com determinação e esforçar-se para
            alcançar o ápice do desempenho. Sua motivação é um chamado para que
            todos sigam seus sonhos.{" "}
          </p>
          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/SL57_stCooA?si=NQzRVrEQnLDj6iN4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <h2>Construindo um Legado de Oportunidades Iguais para Todos </h2>

          <p className="text">
            A igualdade de gênero no esporte é um princípio fundamental que
            promove não apenas a justiça, mas também o desenvolvimento de uma
            sociedade mais inclusiva e equitativa. Ao longo dos anos, avanços
            significativos vêm ocorrendo, mas ainda existem desafios
            persistentes que ressaltam a importância do tema.{" "}
          </p>
          <p className="text">
            Em primeiro lugar, a igualdade de gênero no esporte quebra
            estereótipos prejudiciais e desafia normas culturais que
            historicamente limitaram a participação das mulheres em várias
            modalidades esportivas. Isso não apenas proporciona oportunidades
            desiguais para ambos os sexos, mas também desencoraja a perpetuação
            de ideias antiquadas sobre as capacidades atléticas com base no
            gênero.{" "}
          </p>
          <p className="text">
            Além disso, a igualdade de gênero no esporte é crucial para inspirar
            futuras gerações. Quando as crianças veem atletas de ambos os sexos
            sendo valorizados e celebrados igualmente, isso incentiva o
            desenvolvimento de seus próprios sonhos atléticos, independentemente
            do sexo. Isso contribui para a construção de uma cultura esportiva
            mais inclusiva e diversificada.{" "}
          </p>
          <p className="text">
            A Dra. Mariana Zuaneti Martins, mestre e doutora em Educação Físca
            pela Unicamp, desempenha um papel de liderança à frente do Grupo de
            Estudos sobre Gênero e Esporte, denominado "Grupa", o qual destaca a
            significativa presença e contribuição das mulheres dentro do
            esporte. Martins acredita que confederações e federações esportivas
            têm adotado algumas medidas em relação às políticas de inclusão de
            gênero. Como por exemplo, a implementação de um sistema de cotas que
            visa promover uma participação mais expressiva e equitativa das
            mulheres no cenário esportivo.{" "}
          </p>
          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/C4pG1gYHw9c?si=kv2IcjAJ6022uaLq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            A pesquisadora compartilha importantes observações sobre as
            iniciativas em alguns países para ampliar a participação e liderança
            das mulheres no cenário esportivo, um exemplo, é a Ministra do
            Esporte, Ana Moser, que teve uma reunião em julho desse ano com
            Helena Dorczak, Gerente de Plano do Legado do Futebol da Federação
            de Futebol do Estado de Sydney, durante o encontro promovido pela
            Associação Australiana em Apoio às Mulheres no Esporte. O objetivo
            da associação é influenciar a elaboração de políticas públicas que
            promovam a inclusão de mulheres jovens e adultas em diversas
            modalidades esportivas. A reunião ocorreu na sede do Consulado do
            Brasil na Austrália.{" "}
          </p>
          <p className="text">
            A educação desempenha um papel central nesse processo, agindo como
            agente de questionamento dos papéis de gênero tradicionalmente
            impostos pelos discursos culturais. A igualdade de gênero é
            refletida não apenas na participação em competições, mas também na
            remuneração, premiações e até mesmo nas condições de jogo. Muitas
            vezes, as mulheres enfrentam condições menos favoráveis, jogando em
            locais com infraestrutura inferior se comparadas aos homens.{" "}
          </p>
          <p className="text">
            Dessa forma, Mariana Martins enfatiza a necessidade urgente de
            abordar e transformar esses desafios estruturais, promovendo não
            apenas a presença feminina no esporte, mas garantindo que elas sejam
            tratadas com equidade em todos os aspectos, desde a base até os
            níveis mais elevados da competição.{" "}
          </p>
          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/u12yIxxfStE?si=vxn7PdPrwbBrM-CC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            Com determinação, Martins questiona a noção de que a escassez de
            mulheres em certos campos resulta em limitações inerentes,
            destacando, ao invés disso, o papel crucial da falta de
            oportunidades nesse cenário. Em sua conclusão, ela enfatiza os
            desafios enfrentados por muitas meninas e mulheres, que, devido à
            ausência de estruturas que ofereçam oportunidades financeiramente
            viáveis, acabam por abandonar suas trajetórias esportivas. A
            pesquisadora destaca, portanto, a urgência de implementar mudanças
            substanciais para estabelecer um ambiente esportivo mais equitativo
            e acessível a todas as atletas.{" "}
          </p>

          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/5WisFwtAOzo?si=dtEu6LR_KH2iRHR4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <h2>
            Empoderando Organizações: O Nascimento do Projeto "Uma Vitória Leva
            à Outra"{" "}
          </h2>
          <p className="text">
            O projeto "Uma Vitória Leva à Outra" representa uma colaboração
            entre a ONU Mulheres e o Comitê Olímpico Internacional, em parceria
            com as organizações não governamentais Women Win e Empodera. Seu
            propósito é assegurar a participação equitativa de meninas e
            mulheres no universo esportivo, capacitando-as não apenas a
            participar ativamente, mas também a trabalhar, liderar e desfrutar
            do esporte em condições de igualdade. Originado como um legado dos
            Jogos Olímpicos Rio 2016, o programa está em sua segunda fase (2018
            a 2021), concentrando-se em treinar organizações esportivas para
            promover o empoderamento de meninas por meio do esporte. O projeto
            visa alcançar resultados duradouros na interrupção do ciclo de
            violência, de diversos tipos, contra as mulheres.{" "}
          </p>
          <h2>
            "O impacto da preparação física no alto desempenho esportivo"{" "}
          </h2>
          <p className="text">
            A preparação física de um atleta para os Jogos Paralímpicos é
            crucial no seu desempenho e no alcance de grandes resultados. A
            importância de uma boa preparação física vai muito além do
            condicionamento físico; ela abrange aspectos psicológicos, técnicos
            e sociais, proporcionando uma base sólida para enfrentar as demandas
            competitivas.{" "}
          </p>
          <p className="text">
            Em primeiro momento, a preparação física adequada é essencial para
            otimizar a capacidade funcional do paratleta. Cada atleta
            paralímpico possui características físicas distintas, dependendo da
            sua deficiência, e a preparação física personalizada é crucial para
            desenvolver a força, resistência e flexibilidade necessárias para o
            seu esporte específico. Um exemplo, é o percurso da tenista de mesa
            paralímpica Catia Oliveira, que teve que adaptar seu treinamento
            devido à pandemia. Mesmo diante desse desafio, ela concluiu seus
            ciclos de treino adaptado com sucesso, resultando na conquista de
            uma medalha na última edição das Paralimpíadas em Tóquio, em 2020{" "}
          </p>
          <p className="text">
            O Personal Trainer Henry Nakata trabalhou ao lado de Catia, focando
            especialmente nos exercícios de musculação. Durante a pandemia, as
            aulas eram feitas por vídeo chamada, com a esposa de Catia
            auxiliando nos exercícios. Nakata destaca a importância de organizar
            os treinos em fases, como velocidade, força, resistência e potência,
            para melhorar o desempenho nas competições. Essa abordagem visa
            garantir que Catia esteja preparada para os desafios específicos do
            esporte dela.{" "}
          </p>
          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/uRBx0XJ57VA?si=iMST5g_1AA3SxsgJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            Henry destaca as adaptações implementadas durante o treinamento
            físico de Catia, buscando acomodar sua lesão parcial na cervical.
            Para apoiar a atleta, ele introduziu alguns acessórios específicos,
            como uma cinta fixada ao tronco de Catia enquanto ela estava na
            cadeira de rodas. Além disso, foram utilizadas luvas adaptadas para
            conectar-se aos pesos, oferecendo à atleta maior segurança e
            conforto durante as atividades físicas. Essas ajustagens refletem um
            planejamento cuidadoso para assegurar que o treinamento seja tanto
            eficaz quanto seguro, levando em conta as necessidades únicas de
            Catia.{" "}
          </p>

          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/XVtnG4LLcpg?si=9LjDFxGZ7hUsxI3a"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            O Personal Trainer destaca não apenas a relevância da nutrição
            adequada, sono regulado e suporte psicológico na preparação para as
            competições, mas ressalta que, ao retornar ao treino de musculação,
            a periodização é crucial. A programação dos treinos se estende até o
            dia da competição, com ciclos que aumentam a intensidade e períodos
            dedicados à recuperação. Ele enfatiza a importância dessa abordagem
            estruturada para garantir um condicionamento físico ideal.{" "}
          </p>
          <p className="text">
            {" "}
            Além disso, ele destaca o suporte que Catia recebe de um
            quiropraxista, que se concentra na liberação muscular para otimizar
            a recuperação e prevenir lesões. Essa colaboração destaca a atenção
            integral dada à atleta, garantindo não apenas o desenvolvimento
            físico, mas também cuidados específicos para a saúde muscular e a
            prevenção de possíveis contratempos durante o treinamento e
            competições.{" "}
          </p>

          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/1UAZwNeDeTg?si=DL19QlTBbMlrafpu"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            Henry destaca a relevância da saúde mental do atleta ao enfrentar as
            pressões do esporte de alto rendimento. Ele acrescenta que Catia
            ocupa uma posição de destaque, estando entre as três melhores do
            mundo em sua modalidade. Portanto, enfatiza a importância de um
            trabalho específico para que ela possa gerenciar com eficácia as
            demandas que surgem nesse nível de competição. Concluindo, expressa
            sua honra em colaborar com Catia, elogiando-a como uma atleta
            dedicada e disciplinada. Ele destaca que fazer parte da jornada dela
            é um desafio que ele aceita com entusiasmo.{" "}
          </p>

          <iframe
            style={{ margin: "16px auto" }}
            width={isMobile ? "100%" : isTablet ? "560" : "720" }
            height={isMobile ? "315" : isTablet ? "315" : "405" }
            src="https://www.youtube.com/embed/o7Q4lF9Tyf8?si=cTTBblk82boPY4Km"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
      </StylesRepresentatividade>
    </div>
  );
};

export default Representatividade;

