export const breakpoints = {
  mobile: 480,
  tablet: 576,
  medium: 768,
  laptop: 992,
  desktop: 1280,
  wide: 1440,
};

const colors = {
  primary: "#00BF6F",
  secondary: "#213038",
  tertiary: "#949DA2",
  paragraph: "#54636B",
  border: "#BBC7D6",
  background: "#EBECED",
  light: "#FFFFFF",
  section: "#FFFFFF",
  alert: "#F6686A",
  warning: "#FCD85C",
  success: "#00BF6F",
  info: "#3498DC",
  accent: "#3498DC",
  lightGray: "#f5f5f5",
  lightestGray: "#fcfcfc",
  dark: "#000",
  //specific colors
  heroTitleColor: "#343434",
  internalHeaderTitleColor: "#343434",
  heroImageUpperDots: "#70C4EC",
  heroImageDownDots: "#749BB2",
  heroImageChalkboard: "#213038",
  navbarClientName: "#70C4EC",
};

export const styleBreakpoints = {
  xs: `${breakpoints.mobile}px`,
  sm: `${breakpoints.tablet}px`,
  md: `${breakpoints.medium}px`,
  lg: `${breakpoints.laptop}px`,
  xl: `${breakpoints.desktop}px`,
  xxl: `${breakpoints.wide}px`,
};

const fonts = {
  title: "'Nunito', sans-serif",
  body: "'Open Sans', sans-serif",
};

export type SpacingList = {
  /**
   * 0px
   */
  none: string;
  /**
   * 2px
   */
  xxs: string;
  /**
   * 4px
   */
  xs: string;
  /**
   * 8px
   */
  sm: string;
  /**
   * 16px
   */
  default: string;
  /**
   * 18px
   */
  base: string;
  /**
   * 32px
   */
  md: string;
  /**
   * 48px
   */
  lg: string;
  /**
   * 60px
   */
  xl: string;
  /**
   * 72px
   */
  xxl: string;
};

export const spacing: SpacingList = {
  none: "0px",
  xxs: "2px",
  xs: "4px",
  sm: "8px",
  default: "16px",
  base: "18px",
  md: "32px",
  lg: "48px",
  xl: "60px",
  xxl: "72px",
};

export type SpacingName = keyof SpacingList;

export const Theme = {
  name: "Default",
  colors,
  breakpoints: styleBreakpoints,
  spacing,
  fonts,
};

export type AppTheme = typeof Theme;
