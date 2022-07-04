import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    background-color: transparent;
    
    &:focus {
      outline: none;
    }
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
    background: #fff;
  }

  body,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  table,
  th,
  td,
  form,
  fieldset,
  legend,
  input,
  textarea,
  button,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  menu,
  nav,
  section,
  audio,
  video,
  blockquote,
  hr {
    margin: 0;
    padding: 0;
  }

  strong{
    font-style: normal;
    font-weight: 600;
  }

  em {
    font-style: normal;
    font-weight: 400;
  }

  img,
  fieldset {
    border: 0;
  }

  img {
    vertical-align: top;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  ul,
  ol {
    list-style: none;
  }

  address,
  cite,
  dfn {
    font-style: normal;
  }

  abbr {
    text-decoration: none;
  }

  a,
  label,
  button,
  [type='checkbox'],
  [type='radio'] {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(26, 26, 26, 0.301961);
  }

  [type='checkbox'],
  [type='radio'],
  textarea {
    -webkit-appearance: none;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  table {
    border-collapse: collapse;
  }

  hr {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: none;
    -webkit-overflow-scrolling: touch;
  }

  button {
    overflow: visible;
    border: none;
    border-radius: 0;
    background: none;
    user-select: none;
  }

  button[disabled] {
    cursor: default;
  }

  button,
  [role='button'] {
    cursor: pointer;
    outline: none;
  }


  input[type='text'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type='text']::-ms-clear {
    display: none;
  }

  input[type='password']::-ms-reveal {
    display: none;
  }

  select {
    border: 0;
    background: transparent;
    -webkit-appearance: none;
  }
`;
