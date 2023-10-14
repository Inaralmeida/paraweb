import styled from "styled-components";
import Link from "../Link/Link";
import { useState } from "react";
import IconClose from "../../assets/icons/Close";
import IconMenu from "../../assets/icons/Menu";
import { useMediaQuery } from "react-responsive";
import { EnumColor, ILinkProps } from "../../core/interfaces";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const links: ILinkProps[] = [
    {
      id: "0",
      title: "home",
      to: "/",
      color: EnumColor["pink"],
      label: "Home",
      subLink: false,
    },
    {
      id: "1",
      title: "historias",
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

  const isNotMobile = useMediaQuery({ minWidth: 437 });
  return (
    <StylesHeader>
      <div>
        <h1>PARAWEB</h1>

        <section className="btns-menu-open-and-closed">
          {!openMenu ? (
            <button
              aria-label="Botão para abrir o menu de paginas"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <IconMenu />
            </button>
          ) : (
            <button
              aria-label="Botão para fechar o menu de paginas"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <IconClose />
            </button>
          )}
        </section>
      </div>
      {(isNotMobile || openMenu) && (
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
      )}
    </StylesHeader>
  );
};

export default Header;

const StylesHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 12px 24px 12px;

    > .btns-menu-open-and-closed {
      display: none;
    }
  }
  ul {
    padding: 0;
    width: 100%;
    display: flex;

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 437px) {
    div {
      align-items: center;
      justify-content: space-between;
      padding: 12px;

      > h1{
        font-size: 32px;
      }
      > .btns-menu-open-and-closed {
        display: flex;
        width: fit-content;
        height: fit-content;
        > button {
          width: fit-content;
          height: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          outline: none;
          background: transparent;
        }
      }
    }
    ul {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
`;
