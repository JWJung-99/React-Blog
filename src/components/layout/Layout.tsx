import Header from '@components/header/Header';
import { css, useTheme } from '@emotion/react';
import type { ITheme } from '@styles/Theme';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const theme = useTheme();

  return (
    <div css={layoutStyle(theme)}>
      <Header />
      <main css={mainStyle(theme)}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

const layoutStyle = (theme: ITheme) => css`
  height: 100svh;
  background-color: ${theme.colors.background};
`;

const mainStyle = (theme: ITheme) => css`
  padding: 0 ${theme.padding.paddingSm};
`;
