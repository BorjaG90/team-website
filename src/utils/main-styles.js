import { css } from 'lit';

export const mainStyles = css`
  :host {
    text-align: center;
  }

  header,
  main {
    background-color: var(--tw-background-color);
    color: var(--tw-text-color);
    margin: 0;
  }

  h1 {
    margin-top: 15px;
    padding-bottom: 15px;
  }
`;

export const navStyles = css`
  a {
    color: var(--tw-nav-color) !important;
  }
`;
