//----------------INTERFACES---------------------
export interface IContetHistorysProps {
  id: string;
  title: string;
  titlePage: string;
  interviewed: string;
  photoInterviewed: string;
  headline: string;
  phraseImpact: string;
  nameAuthor: string;
  linkPodcast: string;
  publicationDate: string;
  text: string;
}

export interface IAvatarProps {
  img: string;
  alt: string;
  size: number;
}

export interface IBannerProps {
  image: string;
  title: string;
}

export interface ILinkProps {
  id?: string;
  title: string;
  to: string;
  color: EnumColor;
  subLink: boolean;
  label: string;
}

export interface INameAuthorProps {
  name: string;
  data: string;
}

export interface IPhraseHighlighter {
  name: string;
  phrase: string;
  width?: string;
}
//----------------ENUMS---------------------

export enum EnumColor {
  "yellow",
  "orange",
  "green",
  "blue",
  "pink",
}

//----------------STYLES---------------------

export interface IStylePhraseHighlightProps {
  width: string;
}

export interface IStyleAvatarProps {
  size: number;
}
