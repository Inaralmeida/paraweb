import styled from "styled-components";
import Link, { EnumColor, ILinkProps } from "../Link/Link";

const Header = () => {
  const links: ILinkProps[] = [
    {
      id: "1",
      title: "home",
      to: "/",
      color: EnumColor["pink"],
      label: "Home",
      subLink: false,
    },
    {
      id: "1",
      title: "hiorias",
      to: "/historias/historia-um",
      color: EnumColor["yellow"],
      label: "Hitórias de Vida",
      subLink: false,
    },
    {
      id: "2",
      title: "representatividade",
      to: "/representatividade/historia-um",
      color: EnumColor["orange"],
      label: "REPRESENTATIVIDADE FEMININA",
      subLink: false,
    },
    {
      id: "3",
      title: "apoio",
      to: "/apoio/historia-um",
      color: EnumColor["green"],
      label: "Busca por apoio",
      subLink: false,
    },
    {
      id: "4",
      title: "tecnologia",
      to: "/tecnologia/historia-um",
      color: EnumColor["blue"],
      label: "Tecnologia",
      subLink: false,
    },
    {
      id: "5",
      title: "sobre",
      to: "/sobre",
      color: EnumColor["pink"],
      label: "Sobre Nós",
      subLink: false,
    },
  ];
  return (
    <StylesHeader>
      <h1>PARAWEB</h1>
      <ul>
        {links.map((link) => (
          <Link
            color={link.color}
            label={link.label}
            subLink={link.subLink}
            title={link.title}
            to={link.to}
            key={link.id}
          />
        ))}
      </ul>
    </StylesHeader>
  );
};

export default Header;

const StylesHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    width: 100%;
    padding: 12px 12px 24px 12px;
  }
  ul {
    padding: 0;
    width: 100%;
    display: flex;
  }
`;
