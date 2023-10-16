import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import { contentRepresentatividade } from "../../core/contentRepresentatividade";
import { EnumColor, IContentRepresentatividadeProps } from "../../core/interfaces";
import { useParams } from "react-router-dom";
import Link from "../../components/Link/Link";
import { useMediaQuery } from "react-responsive";
import Avatar from "../../components/Avatar/Avatar";
import NameAuthor from "../../components/NameAuthor/NameAuthor";
import { StylesRepresentatividade } from "./representatividade.styles";

const Representatividade = () => {
  const params = useParams();
  const isMobile = useMediaQuery({ maxWidth: "623px" });
  const isTablet = useMediaQuery({ maxWidth: "780px" });
  const [contentPage, setContentPage] = useState<IContentRepresentatividadeProps | null>();
  const internalPages = contentRepresentatividade.map((page) => {
    return {
      title: page.title,
      titlePage: page.titlePage,
      id: page.id,
    };
  });

  useEffect(() => {
    const titlePage = params.titulo;

    const [currentPage] = contentRepresentatividade.filter(
      (page) => page.titlePage === titlePage
    );
    setContentPage(currentPage ? currentPage : null);
  }, [params]);
  return (
    <div>
      <Banner
        title="Representatividade feminina"
        image="/representatividade.jpeg"
      />
      <ul style={{ display: "flex" }}>
        {internalPages.map((page) => (
          <Link
            color={EnumColor["orange"]}
            label={page.title}
            subLink
            title={page.titlePage}
            to={`/representatividade/${page.titlePage}`}
            id={page.id}
            key={page.id}
          />
        ))}
      </ul>
      <StylesRepresentatividade>
        <section className="intro">
          <p className="text subtitle">
            A representatividade feminina no esporte paralímpico desempenha um
            papel fundamental na quebra de estereótipos, na promoção da
            igualdade de gênero e na inspiração de pessoas ao redor do mundo.
          </p>
          <p className="text">
            O crescimento das mulheres no esporte paralímpico no Brasil está
            intimamente ligado à criação do Comitê Paralímpico Brasileiro (CPB).
            Desde a criação do órgão regulador nacional do paradesporto, em
            1995, o número de mulheres brasileiras aumentou quase dez vezes em
            relação ao ano anterior. Aumentar a participação das atletas em
            todos os esportes paraolímpicos é um dos pilares do Plano
            Estratégico 2017-2020 do CPB. A meta nos próximos anos é preencher
            todos os cargos femininos vagos na delegação dos Jogos Brasileiros.
          </p>
        </section>
        {contentPage && (
          <>
            <section>
              <div className="destaque">
                <h3 className="title-destaque">{contentPage.headline}</h3>
                <NameAuthor
                  data={contentPage.publicationDate}
                  name={contentPage.nameAuthor}
                />
              </div>
              <div className="data-interviewed">
                <Avatar
                  alt={contentPage.interviewed}
                  img={contentPage.photoInterviewed}
                  size={isMobile || isTablet ? 200 : 350}
                />
                <NameAuthor
                  data={contentPage.dataInterviewed}
                  name={contentPage.interviewed}
                />
              </div>
            </section>
            <section className="text materia">
              <p className="materia">{contentPage.text}</p>
            </section>
          </>
        )}
      </StylesRepresentatividade>
    </div>
  );
};

export default Representatividade;
