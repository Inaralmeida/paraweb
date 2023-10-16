import { useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Link from "../../components/Link/Link";
import { contentHistorias } from "../../core/contentHistorias";
import { EnumColor, IContetHistorysProps } from "../../core/interfaces";
import { useEffect } from "react";
import { useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import PhraseHighlight from "../../components/PhraseHighlight/PhraseHighlight";
import NameAuthor from "../../components/NameAuthor/NameAuthor";
import { StylesHistory } from "./historias.styles";
import ReactAudioPlayer from "react-audio-player";
import { useMediaQuery } from "react-responsive";

const Historias = () => {
  const params = useParams();
  const isMobile = useMediaQuery({ maxWidth: "623px" });
  const isTablet = useMediaQuery({ maxWidth: "780px" });
  const [contentPage, setContentPage] = useState<IContetHistorysProps | null>();
  const internalPages = contentHistorias.map((page) => {
    return {
      title: page.title,
      titlePage: page.titlePage,
      id: page.id,
    };
  });

  useEffect(() => {
    const titlePage = params.titulo;

    const [currentPage] = contentHistorias.filter(
      (page) => page.titlePage === titlePage
    );
    setContentPage(currentPage ? currentPage : null);

  }, [params]);
  return (
    <StylesHistory>
      <Banner title="Histórias de vida" image="/historias.jpg" />
      <ul style={{ display: "flex" }}>
        {internalPages.map((page) => (
          <Link
            color={EnumColor["yellow"]}
            label={page.title}
            subLink
            title={page.titlePage}
            to={`/historias/${page.titlePage}`}
            id={page.id}
            key={page.id}
          />
        ))}
      </ul>
      {contentPage && (
        <>
          <section>
            <Avatar
              alt={contentPage.interviewed}
              img={contentPage.photoInterviewed}
              size={isMobile || isTablet ? 200 : 350}
            />

            <div className="author">
              <PhraseHighlight
                name={contentPage.interviewed}
                phrase={contentPage.phraseImpact}
              />
              <NameAuthor
                data={contentPage.publicationDate}
                name={contentPage.nameAuthor}
              />
            </div>
          </section>

          <section className="podcast">
            <h3 className="title-destaque">{contentPage.headline}</h3>

            <ReactAudioPlayer
              title="podcast"
              className="player"
              src={contentPage.linkPodcast}
              style={{ width: isMobile ? "100%" : "30vw" }}
              controls
            />
          </section>

          <section className="materia">
            <p className="text">{contentPage.text}</p>

          </section>
        </>
      )}
    </StylesHistory>
  );
};

export default Historias;
