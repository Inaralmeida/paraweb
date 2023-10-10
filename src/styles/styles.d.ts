import "styled-components";

import theme from "./theme";

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    black900: string;
    white50: string;
    white100: string;
    white200: string;
    green500: string;
    green100: string;
    green50: string;
    gray200: string;
    gray100: string;
    shadow50: string;
    shadow15: string;
    blue500: string;
    blue300: string;
    blue50: string;
    orange500: string;
    orange100: string;
    yellow500: string;
    yellow100: string;
    pink500: string;
  }
}
