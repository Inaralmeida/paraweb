import { NavLink, useLocation, useParams } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { EnumColor, ILinkProps } from "../../core/interfaces";

const Link = ({ title, to, color, label, subLink }: ILinkProps) => {
  const params = useParams();
  const theme = useTheme();
  const location = useLocation();
  const linkIsActive =
    params.title === title || location.pathname.includes(title);

  const handleSelectColor = (color: EnumColor) => {
    let style = {};

    switch (color) {
      case EnumColor["yellow"]:
        style = {
          backgroundColor:
            !subLink || linkIsActive ? theme.yellow500 : theme.yellow100,
        };
        break;
      case EnumColor["green"]:
        style = {
          backgroundColor:
            !subLink || linkIsActive ? theme.green500 : theme.green100,
        };
        break;
      case EnumColor["blue"]:
        style = {
          backgroundColor:
            !subLink || linkIsActive ? theme.blue500 : theme.blue100,
        };
        break;
      case EnumColor["orange"]:
        style = {
          backgroundColor:
            !subLink || linkIsActive ? theme.orange500 : theme.orange100,
        };
        break;
      case EnumColor["pink"]:
        style = {
          backgroundColor: theme.pink500,
        };
    }

    return style;
  };

  return (
    <StyleLink style={handleSelectColor(color)}>
      <NavLink to={to} className={linkIsActive && !subLink ? "active" : ""}>
        {label}
      </NavLink>
    </StyleLink>
  );
};

export default Link;

const StyleLink = styled.li`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 12px;
  flex-grow: 2;
  > a{
    color: black !important;
  }
`;
