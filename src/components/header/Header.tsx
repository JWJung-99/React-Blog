import { css, useTheme } from '@emotion/react';
import type { ITheme } from '@styles/Theme';

const Header = () => {
  const theme = useTheme();

  return (
    <header className={'mo'} css={headerStyle(theme)}>
      <div css={buttonContainerStyle}>
        <button type="button" css={buttonStyle(theme)}>
          <span className="hidden">검색 버튼</span>
          <img src={`/icons/light/icon-search.svg`} alt="검색 이미지" />
        </button>
        <button type="button" css={buttonStyle(theme)}>
          <span className="hidden">테마 변경 버튼</span>
          <img src={`/icons/light/icon-theme.svg`} alt="테마 이미지" />
        </button>
        <button type="button" css={buttonStyle(theme)}>
          <span className="hidden">메뉴 버튼</span>
          <img src={`/icons/light/icon-menu.svg`} alt="메뉴 이미지" />
        </button>
      </div>
    </header>
  );
};

export default Header;

const headerStyle = (theme: ITheme) => css`
  box-shadow: inset 0 0 10px red;
  padding: 4px ${theme.padding.paddingSm};
`;

const buttonContainerStyle = css`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const buttonStyle = (theme: ITheme) => css`
  width: 4.8rem;
  height: 4.8rem;
  padding: 1.2rem;
  box-sizing: border-box;
  position: relative;

  &:hover {
    &::after {
      content: '';
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: ${theme.colors.hover};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
