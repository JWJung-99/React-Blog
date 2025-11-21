import '@emotion/react';
import type { ITheme } from './src/styles/Theme';

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
