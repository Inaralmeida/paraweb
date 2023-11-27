import Banner from "../../components/Banner/Banner";
import NameAuthor from "../../components/NameAuthor/NameAuthor";
import { StylesTech } from "./tecnologia.styles";

const Tecnologia = () => {
  return (
    <div>
      <Banner title="Tecnologia" image="/tech.jpg" />
      <StylesTech>
        <section>
          <div className="destaque">
            <h3 className="title-destaque">
              IMPORTANCIA DOS AVANÇOS TECNOLÓGICOS PARA OS ATLETAS E COMO
              FUNCIONA A FISIOTERAPIA PARA OS MESMOS.
            </h3>
            <NameAuthor
              data="27 de novembro de 2022"
              name={`Giovanni V. Panatto`}
            />
          </div>
        </section>
        <section className="textContent">
          <p className="text">
            Como todos sabem, a tecnologia vem avançando em todos os seus meios
            e trazendo grandes evoluções e recursos para a vida. Nos atletas,
            isso não é diferente; mudanças consideráveis na vida e no desempenho
            esportivo mostram como a tecnologia veio para auxiliar tanto na
            parte profissional quanto na pessoal. Outra parte essencial no
            desempenho dos atletas é a fisioterapia e, claro, com o avanço da
            tecnologia, uma área acaba impulsionando a outra, visando sempre a
            melhoria de vida.
          </p>
          <p className="text">
            Com a evolução da tecnologia, os equipamentos usados nos esportes
            paraolímpicos tiveram uma melhora significativa, além de serem
            produzidos em maior escala devido à sua grande procura. Entre eles,
            podemos citar as cadeiras de rodas, essenciais para algumas
            modalidades, como, por exemplo, o atletismo, que nos últimos anos
            teve um grande foco em melhorar o desempenho e aumentar a
            velocidade, sem prejudicar ou apresentar algum risco para o atleta.
            As toucas de natação começaram a vibrar quando o atleta se aproxima
            do fim da piscina, visando evitar riscos de lesões. Isso demonstra
            que há um foco não apenas no alto desempenho, mas também em melhorar
            a vida e a segurança dos usuários. Grandes marcas, como a alemã BMW,
            investiram no esporte paralímpico, produzindo cadeiras (utilizadas
            em esportes como atletismo e basquete) que não apenas aumentam a
            velocidade, como mencionado anteriormente, mas também proporcionam
            um controle maior ao atleta sobre ela. Aqui no Brasil, as próteses
            de alto rendimento são produzidas pela Braskem, empresa que também
            realiza doações para alguns atletas.
          </p>
          <picture>
            <img src="/tecnologia/foto1.jpeg" alt="Na foto o treinador de Bocha, João Martins- arquivo pessoal cedido pelo treinador
" />
            <legend>Na foto o treinador de Bocha, João Martins- arquivo pessoal cedido pelo treinador
</legend>
          </picture>
          <picture>
            <img src="/tecnologia/foto2.jpeg" alt="Raphael Forti exibindo a medalha após um torneio de Jiu Jitsu- Arquivo pessoal do atleta cedido para o grupo. 
" />
            <legend>Raphael Forti exibindo a medalha após um torneio de Jiu Jitsu- Arquivo pessoal do atleta cedido para o grupo. 
</legend>
          </picture>
          <p className="text">
            Uma questão muito recorrente que temos é: "Como os atletas conseguem
            esses equipamentos?" Uma dúvida que sempre paira no ar para quem
            acompanha a modalidade. Alguns avanços tecnológicos podem atingir
            até 20 mil reais, um custo que nem todo atleta tem condições de
            arcar. Alguns atletas mais renomados, como Daniel Dias, contam com
            patrocinadores, que acabam proporcionando esses avanços para seus
            treinos e competições. Além disso, alguns equipamentos são
            adquiridos por meio de doações. João Martins, treinador de bocha, e
            Raphael Forti, atleta de jiu-jitsu (ainda não um esporte olímpico),
            compartilharam como conseguiram os equipamentos para seus treinos.
            "Eu tive a oportunidade de experimentar diversas tecnologias de
            última geração, todas conseguidas pelo governo, em um programa
            chamado Bolsa Atleta. No entanto, foi preciso entrar na fila de
            espera, passar por triagem e entrevistas", disse Raphael. O Bolsa
            Atleta é um programa da Caixa Econômica Federal que realiza um
            pagamento mensal para auxiliar os atletas a obterem recursos para
            adquirir os equipamentos e realizar treinamentos de alto nível. João
            Martins também destacou algo muito importante ao ser questionado
            sobre a importância dessas evoluções para o dia a dia do atleta:
            "Qualquer evolução, mesmo que seja mínima, é importante! Hoje,
            qualquer ganho é comemorado".
          </p>
          <p className="text">
            A tecnologia também está presente no treinamento dos atletas. João
            nos disse que, por meio de um aparelho, consegue acompanhar a
            evolução dos atletas de um treino para outro, analisando a força
            aplicada e sugerindo maneiras de melhorar o desempenho, focando no
            alto rendimento. No caso de Raphael, mesmo seu esporte ainda não
            participando de grandes competições como Paraolimpíadas e Parapans,
            ele utiliza tecnologia avançada. "Existem hoje vários robôs com os
            quais tive a oportunidade de treinar, que estimulam a marcha e o
            movimento dos braços e mãos". Isso contribui para tornar o atleta
            mais independente, dependendo mais de suas habilidades do que do
            equipamento.
          </p>
          <p className="text">
            O avanço na tecnologia também alcançou a medicina, e a área mais
            presente na vida dos atletas é a fisioterapia. Vamos entender como
            isso funciona e como contribui para o desempenho. A Dra. Alice
            Oliveira explicou como a fisioterapia ajuda os atletas: “A
            fisioterapia, em si, avalia, previne e reabilita esses atletas de
            alto rendimento, ajudando em uma melhor performance e reduzindo
            riscos de lesões esportivas. Além disso, contribui para uma melhor
            condição fora dos jogos”. Como mencionado em grande parte do
            trabalho, a tecnologia e a fisioterapia têm um foco muito grande em
            ajudar o atleta fora das competições também, buscando realmente
            melhorar a qualidade de vida da pessoa. Também perguntamos para a
            Doutora como era feita a fisioterapia nos atletas, e ela nos disse o
            seguinte: “…é feita de forma individual para cada atleta. Já que os
            paratletas têm mais predisposição a lesões esportivas, é preciso
            ficar atento ao tipo de esporte que cada um pratica, resolvendo
            assim os problemas gerados pela prática do esporte, reavaliando o
            atleta, traçando os melhores objetivos e tratamentos”. Nessa
            resposta, podemos ver que a fisioterapia é algo muito pessoal e
            ajuda muito o atleta a não se lesionar, focando em fortalecer
            músculos. No entanto, se ocorrer uma lesão, cada atleta tem uma
            maneira específica de tratamento, variando de atleta para atleta.
            Por fim, ela nos disse se é preciso algum cuidado específico com
            esses atletas, e a resposta foi: “SIM, é necessário levar em
            consideração as questões físicas do atleta, sua deficiência e seu
            esporte, adaptando assim exercícios que melhorem as condições de
            função do atleta e não regressem no esporte”. Com certeza, a parte
            mais interessante e importante dessa entrevista, a Dra. deixa bem
            claro que depende de tudo, do esporte que o atleta pratica, da
            deficiência que ele tem, para começarem um tratamento focando em sua
            melhora.
          </p>
          <picture>
            <img src="/tecnologia/foto3.jpeg" alt="Doutora Alice durante um atendimento a um paciente - Arquivo pessoal cedido pela própria" />
            <legend>Doutora Alice durante um atendimento a um paciente - Arquivo pessoal cedido pela própria</legend>
          </picture>
          <p className="text">
            Conseguimos ver esse eixo entre tecnologia e Fisioterapia, que se
            encontram em determinado momento e sempre com o principal foco:
            Ajudar o atleta dentro e fora das competições. A tecnologia vai
            evoluir ainda mais durante os anos, e com certeza vai continuar
            ajudando os atletas a evoluir na vida profissional e pessoal também.
          </p>

          <picture>
            <img src="/tecnologia/foto4.jpeg" alt="Na foto Doutora Alice se preparando para um de seus atendimentos. 
" />
            <legend>Na foto Doutora Alice se preparando para um de seus atendimentos. 
</legend>
          </picture>
        </section>
      </StylesTech>
    </div>
  );
};

export default Tecnologia;

