interface IColor {
  white: string;
  black: string;
  error: string;

  focus: string;
  hover: string;

  background: string;
  foreground: string;
  subBackground: string;
  subForeground: string;

  outline: string;

  emptyImage: string;

  logoDark: string;
  logoLight: string;
}

interface ITypography {
  titleLgEm: string;
  titleMdEm: string;
  bodyLgEm: string;
  bodyMdEm: string;
  bodySm: string;
  bodyXs: string;
}

export interface ITheme {
  colors: IColor;
  typography: ITypography;
}

const typography: ITypography = {
  titleLgEm: '500 2.2rem/2.8rem',
  titleMdEm: '600 1.6rem/2.4rem',
  bodyLgEm: '600 1.4rem/2rem',
  bodyMdEm: '500 1.4rem/2rem',
  bodySm: '500 1.1rem/1.6rem',
  bodyXs: '500 0.8rem/1.2rem',
};

export const lightTheme: ITheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    error: '#b3261e',

    focus: '#3b3b3b',
    hover: 'rgba(71, 71, 71, 0.08)',

    background: '#f9f9f9',
    foreground: '#000000',
    subBackground: '#ffffff',
    subForeground: '#666666',

    outline: '#e2e2e2',

    emptyImage: '#e4e4e4',

    logoDark: '#323232',
    logoLight: '#d4d4d4',
  },
  typography,
};

export const darkTheme: ITheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    error: '#b3261e',

    focus: '#d4d4d4',
    hover: '#474747',

    background: '#131313',
    foreground: '#e2e2e2',
    subBackground: '#1b1b1b',
    subForeground: '#e2e2e2',

    outline: '#e2e2e2',

    emptyImage: '#e4e4e4',

    logoDark: '#323232',
    logoLight: '#d4d4d4',
  },
  typography,
};
