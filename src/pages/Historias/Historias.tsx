import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import Banner from "../../components/Banner/Banner";
import Link from "../../components/Link/Link";
import NameAuthor from "../../components/NameAuthor/NameAuthor";
import PhraseHighlight from "../../components/PhraseHighlight/PhraseHighlight";
import Transcription from "../../components/Transcriptions";
import { contentHistorias } from "../../core/contentHistorias";
import { EnumColor, IContetHistorysProps } from "../../core/interfaces";
import { StylesHistory } from "./historias.styles";

const Historias = () => {
  const params = useParams();
  const [timeCurrent, setTimeCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: "623px" });
  const isTablet = useMediaQuery({ maxWidth: "780px" });
  const [contentPage, setContentPage] = useState<IContetHistorysProps | null>();
  const internalPages = contentHistorias.map((page) => {
    return {
      title: page.title,
      titlePage: page.titlePage,
      id: page.id,
    };
  })

  const imageP = `/banners/banner_historiasdevida_p.jpeg`
  const imageM = `/banners/banner_historiasdevida_m.jpeg`
  const imageG = `/banners/banner_historiasdevida_g.png`

  const imageBanner = isMobile ? imageP : isTablet ? imageM : imageG;
  useEffect(() => {
    const titlePage = params.titulo;
    const [currentPage] = contentHistorias.filter(
      (page) => page.titlePage === titlePage
      );
    setContentPage(currentPage ? currentPage : null);
  }, [params]);
  return (
    <StylesHistory>
      <Banner title="Histórias de vida" image={imageBanner} />
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
          <section className="title">
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

          <section className="content">
            <section className="materia">
              <h3 className="title-destaque">{contentPage.headline}</h3>

              <div className="textContent">
                {contentPage.text.map((item: string, index: number) => (
                  <p key={index} className="text">
                    {item}
                  </p>
                ))}
              </div>
            </section>

            <div className="podcast">
              <ReactAudioPlayer
                title="podcast"
                listenInterval={100}
                className="player"
                src={contentPage.linkPodcast}
                style={{ width: "100%" }}
                controls
                preload="none"
                onListen={(e) => setTimeCurrent(e)}
              />

              <Transcription
                currentTime={timeCurrent}
                transcription={contentPage.transcription}
              />
            </div>
          </section>
        </>
      )}
    </StylesHistory>
  );
};

export default Historias;
