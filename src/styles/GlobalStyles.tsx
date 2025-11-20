import { css, Global } from '@emotion/react';

const globalStyle = css`
  :root {
    width: 100%;
    min-width: 320px;
    overflow-x: clip;
    min-height: 100svh;
  }

  /* Reset CSS */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    height: 100svh;
  }

  /* input, select, textarea style */
  select,
  input,
  textarea {
    all: unset;
  }

  /* button */
  button {
    all: unset;
    cursor: pointer;
  }

  /* anchor */
  a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
  }

  /* image */
  img {
    max-width: 100%;
    vertical-align: top;
  }

  /* Typography */
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url('@/assets/fonts/PretendardVariable.woff2') format('woff2');
    font-display: swap;
  }

  :root {
    font-size: 10px;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    font-size: 1.4rem;
  }

  /* Breakpoints */
  /* mobile */
  .mo {
    display: block;
  }
  .pc {
    display: none;
  }

  @media (max-width: 320px) {
    :root {
      font-size: 9px;
    }
  }

  @media (min-width: 500px) and (max-width: 767px) {
    :root {
      font-size: 11px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    :root {
      font-size: 12px;
    }
  }

  /* PC */
  @media (min-width: 1024px) {
    .mo {
      display: none;
    }
    .pc {
      display: block;
    }
  }

  /* Variables */
  --transition-duration: 0.3s;
  --box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.25);
  --background-dim: rgba(0, 0, 0, 0.5);

  .hidden {
    position: absolute !important;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
  }
`;

const GlobalStyle = () => <Global styles={globalStyle} />;
export default GlobalStyle;
