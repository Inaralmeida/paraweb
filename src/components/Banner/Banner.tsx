import styled from "styled-components";
import { IBannerProps } from "../../core/interfaces";

const Banner = ({ image, title }: IBannerProps) => {
  return (
    <StyleBanner image={image} title={title}>
      <h2 className="title-banner">{title}</h2>
    </StyleBanner>
  );
};

export default Banner;

const StyleBanner = styled.div<IBannerProps>`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  > h2 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.shadow50};
    text-align: center;

    @media screen and (max-width: 475px) {
      font-size: 28px;
    }
  }
`;
